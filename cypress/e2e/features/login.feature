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

    
    Cenário: Login inválido - Usuário Inválido
        Quando eu insiro o usuário "user_invalid"
        E insiro a senha "senhaQualquer"
        E clico no botão de login
        Então está exibindo uma mensagem de erro

    Cenário: Login inválido - Senha inválida
        Quando eu insiro o usuário "standard_user"
        E insiro a senha "senhaInvalida"
        E clico no botão de login
        Então está exibindo uma mensagem de erro
