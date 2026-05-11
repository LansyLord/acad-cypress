#language: pt

Funcionalidade: Logins válidos e inválidos
    Eu, como usuário de sistema
    Quero testar diferentes cenários de login.
    Para garantir que o sistema autentique corretamente.

    Contexto: Estar ma página de login do saucedemo
        Dado que eu estou na página de login do saucedemo
    
    Cenário: Login válido - Usuário Padrâo
        Quando eu insiro o usuário e a senha correta
        E clico no botão de login
        Então eu devo ser redirecionado para a página de produtos