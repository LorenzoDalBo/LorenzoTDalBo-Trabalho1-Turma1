const GerenciadorDeTarefas = require("../src/Trabalho01Turma01")

describe("testes", () => {
    let tarefas

    test("listar tarefas deve estar vazio", () => {
        tarefas = new GerenciadorDeTarefas()
        expect(tarefas.listarTarefas()).toEqual([])
    })

    test("", () => {
        tarefas = new GerenciadorDeTarefas()
        tarefas.adicionarTarefa("tarefa1")
        expect(tarefas.listarTarefas()).toEqual(["tarefa1"])
    })

    
1
})

