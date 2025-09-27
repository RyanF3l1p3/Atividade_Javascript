//21. Escreva um programa para controlar uma fila de atendimento, deve guardar o
//nome da pessoa ao clicar no botão "entrar na fila" e inserir no final de uma fila.

// Vetores para armazenar as informações
// Cada item é um objeto: { nome: string, entradaTimestamp: number }
const filaDeEspera = [];

// Cada item é um objeto: 
// { nome: string, entradaFormatada: string, saidaFormatada: string, tempoEsperaMs: number, tempoEsperaFormatado: string }
const historicoDeAtendimentos = [];

// --- Funções Auxiliares ---

/**
 * Formata um timestamp (Date.now()) em milissegundos para uma string de data e hora.
 * Exemplo: "26/09/2025 23:32:08"
 * @param {number} timestamp - O timestamp em milissegundos.
 * @returns {string} - A data e hora formatada.
 */
function formatarTempo(timestamp) {
    const data = new Date(timestamp);
    // Usa Intl.DateTimeFormat para formatação completa
    return new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Formato 24h
    }).format(data);
}

/**
 * Converte o tempo em milissegundos para uma string formatada (M:SS).
 * @param {number} milissegundos - A duração em milissegundos.
 * @returns {string} - A duração formatada (e.g., "3 minutos e 45 segundos").
 */
function formatarDuracao(milissegundos) {
    const segundosTotais = Math.floor(milissegundos / 1000);
    const minutos = Math.floor(segundosTotais / 60);
    const segundos = segundosTotais % 60;
    
    let resultado = "";
    if (minutos > 0) {
        resultado += `${minutos} minuto${minutos > 1 ? 's' : ''}`;
    }
    if (segundos > 0) {
        // Adiciona um separador se já tiver minutos
        if (minutos > 0) {
            resultado += " e ";
        }
        resultado += `${segundos} segundo${segundos > 1 ? 's' : ''}`;
    }
    
    return resultado || "Menos de 1 segundo";
}

// --- Funções de Controle da Fila ---

/**
 * Simula o clique no botão "entrar na fila".
 * Insere a pessoa no final do vetor `filaDeEspera` (push()).
 * @param {string} nome - O nome da pessoa a ser adicionada.
 */
function entrarNaFila(nome) {
    if (!nome) {
        console.warn("🚫 Por favor, forneça um nome para entrar na fila.");
        return;
    }

    const entradaTimestamp = Date.now();
    
    // Insere no final da fila (push)
    filaDeEspera.push({ 
        nome: nome, 
        entradaTimestamp: entradaTimestamp,
        horaMinutoSegundo: formatarTempo(entradaTimestamp).split(' ')[1] // Apenas H:M:S
    });

    console.log(`✅ ${nome} entrou na fila em: ${formatarTempo(entradaTimestamp)}`);
    exibirDados();
}

/**
 * Simula o clique no botão "atender".
 * Remove a primeira pessoa do vetor `filaDeEspera` (shift()), calcula o tempo
 * de atendimento e a adiciona no `historicoDeAtendimentos`.
 */
function atenderProximo() {
    if (filaDeEspera.length === 0) {
        console.warn("🚫 A fila de espera está vazia. Não há ninguém para atender.");
        exibirDados();
        return;
    }

    // Remove o primeiro elemento da fila (shift)
    const pessoaAtendida = filaDeEspera.shift(); 
    
    const saidaTimestamp = Date.now();
    const tempoEsperaMs = saidaTimestamp - pessoaAtendida.entradaTimestamp;
    const tempoEsperaFormatado = formatarDuracao(tempoEsperaMs);

    // Cria o registro completo para o histórico
    const registroHistorico = {
        nome: pessoaAtendida.nome,
        entradaFormatada: formatarTempo(pessoaAtendida.entradaTimestamp),
        saidaFormatada: formatarTempo(saidaTimestamp),
        tempoEsperaMs: tempoEsperaMs,
        tempoEsperaFormatado: tempoEsperaFormatado
    };

    // Adiciona o registro completo ao histórico
    historicoDeAtendimentos.push(registroHistorico);

    console.log(`\n🔔 ${pessoaAtendida.nome} foi atendido(a)!`);
    console.log(`   Tempo de espera: ${tempoEsperaFormatado}`);
    exibirDados();
}

// --- Função de Exibição ---

/**
 * Exibe de forma organizada os dados dos dois vetores.
 */
function exibirDados() {
    console.log("\n" + "-".repeat(60));
    
    // Exibição da Fila de Espera (Vetor 1)
    console.log(`📝 FILA DE ESPERA ATUAL (${filaDeEspera.length} pessoa${filaDeEspera.length !== 1 ? 's' : ''}):`);
    
    if (filaDeEspera.length > 0) {
        // O enunciado pede para exibir o nome e a hora (hora, minutos e segundos) que a pessoa entrou
        filaDeEspera.forEach((pessoa, index) => {
            console.log(`  ${index + 1}º | Nome: ${pessoa.nome} | Hora Entrada: ${pessoa.horaMinutoSegundo}`);
        });
    } else {
        console.log("  [Vazia]");
    }

    console.log("\n" + "-".repeat(60));
    
    // Exibição do Histórico de Atendimentos (Vetor 2)
    console.log(`📜 HISTÓRICO DE ATENDIMENTOS (${historicoDeAtendimentos.length} registro${historicoDeAtendimentos.length !== 1 ? 's' : ''}):`);

    if (historicoDeAtendimentos.length > 0) {
        // Exibe o nome, data/hora entrada, data/hora saída e o tempo demorado
        historicoDeAtendimentos.forEach((registro, index) => {
            console.log(`  ${index + 1}º | Nome: ${registro.nome}`);
            console.log(`     Entrada: ${registro.entradaFormatada}`);
            console.log(`     Saída:   ${registro.saidaFormatada}`);
            console.log(`     Tempo Total: ${registro.tempoEsperaFormatado}`);
        });
    } else {
        console.log("  [Nenhum registro ainda]");
    }
    
    console.log("-".repeat(60) + "\n");
}

// --- Simulação de Uso ---

console.log("--- INÍCIO DA SIMULAÇÃO ---");
exibirDados();

// 1. Entrar na fila (Simulação do clique em "entrar na fila")
entrarNaFila("Alice");
// Simulação de um pequeno intervalo de tempo
setTimeout(() => entrarNaFila("Bob"), 1500); 
setTimeout(() => entrarNaFila("Charlie"), 3000); 

// 2. Atender (Simulação do clique em "atender")
setTimeout(() => atenderProximo(), 5000); // Atende Alice
setTimeout(() => atenderProximo(), 7000); // Atende Bob

// 3. Mais uma pessoa entra e é atendida
setTimeout(() => entrarNaFila("Diana"), 8000); 
setTimeout(() => atenderProximo(), 10000); // Atende Charlie
setTimeout(() => atenderProximo(), 12000); // Atende Diana

// Tenta atender quando a fila está vazia
setTimeout(() => atenderProximo(), 13000);