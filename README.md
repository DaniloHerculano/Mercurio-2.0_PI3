# Mercurio-2.0-PI3
- Universidade: UNIVESP
- Curso: Ciência de Dados
- Turma: DRP04-PJI310-SALA-004GRUPO-009
- Disciplina: Projeto Integrador III
- Projeto: Mercúrio - Site simples para aluguel de mobiliários

# Resumo do projeto
Projeto desenvolvido para aprimorar o processo de locação de móveis para uma empresa de aluguel de mobiliário. Após um levantamento de novas necessidades, foi decidido criar uma plataforma web intuitiva que permite ao cliente cadastrar-se, fazer reservas e verificar a disponibilidade dos produtos de forma autônoma, sem a necessidade de interação constante com os funcionários.
A plataforma utiliza HTML, CSS, Javascript, e integra-se com APIs para uma experiência fluida e eficiente. A interface foi projetada com foco na acessibilidade e na experiência do usuário final, permitindo fácil navegação e segurança durante o processo de reserva e pagamento.

# Release Notes – Atualizações do Projeto

24 a 25/03/2025 – Autor: Danilo Herculano 
- Versão inicial do site, ainda sem responsividade para dispositivos móveis.
- Melhorias na utilização do localStorage para manter os dados entre sessões do usuário.
- Site hospedado na plataforma Netlify (https://app.netlify.com/). O link público de acesso ao site é: https://mercuriolocacoes.netlify.app/
  
26 a 28/03/2025 – Autor: Danilo Herculano 
- Melhorias de responsividade para PC e celular nas páginas: Início, Sobre, Área do Cliente, Produtos, Serviços e Contatos.
- O código HTML, CSS e JavaScript está unificado em um único arquivo, reduzindo a quantidade de arquivos no diretório, facilitando a organização, eleminando requisições adicionais para CSS/JS separados, execução mais rápida e sem dependências.

29/03/2025 – Autor: Danilo Herculano  
- Correção do rodapé nas páginas: Sobre, Área do Cliente, Produtos, Serviços e Contatos.  
- Ajuste no nome e slogan do site (remoção de underline).  

30/03/2025 – Autor: Danilo Herculano  
- Responsividade ajustada para as páginas: Membros do Grupo, Usuário Identificado e Encomendar.  
- Atualização dos dados na página Membros do Grupo com informações do projeto PI.III.  

31/03/2025 – Autor: Danilo Herculano  
- Novo layout para cadastro de usuários.  
- Integração com a API dos Correios para autopreenchimento de endereço via CEP.  

01/04/2025 – Autor: Danilo Herculano  
- Área do Usuário Logado agora exibe novas informações do cadastro.  
- Login pode ser feito com e-mail ou nome de usuário.  
- Página Encomendar agora permite escolher entre retirada ou entrega, podendo usar o endereço cadastrado ou um diferente.  

02/04/2025 – Autor: Danilo Herculano  
- Adicionado link para Instagram.  
- Alteração no layout da recuperação de senha.  
- Implementada tela "Eventos" e incluído menu "Eventos" em todas as páginas.  

03/04/2025 – Autor: Danilo Herculano
- Alinhamento do logo da empresa na tela inicial.
- Menu "Eventos" corrigido na versão mobile; agora ele não fica mais oculto atrás da imagem do evento.
- Implementada função para destacar o botão correspondente à página ativa no menu de navegação.

04/04/2025 – Autor: Danilo Herculano
- Implementada mensagem de confirmação no formulário de contato após o envio. O botão "Limpar" agora funciona corretamente.
- Implementada função que gera valores de frete aleatórios para simulação dinâmica.
- Código documentado com comentários para melhorar a clareza e a manutenção.

14/04/2025 – Autor: Danilo Herculano
Arquivos adicionados:
- netlify.toml – Configuração de formulários com Netlify.
- success.html – Página de confirmação de envio.
Atualizações em index-4.html:
- Formulário de contato integrado ao Netlify Forms, enviando os dados para mercuriolocacoes@gmail.com.
- Redirecionamento para success.html após envio bem-sucedido.

03/05/2025 – Autor: Danilo Herculano
- Desenvolvida uma API utilizando Google Sheets e Google Apps Script para armazenar os dados dos usuários recém-cadastrados.

04/05/2025 – Autor: Danilo Herculano
- Modificado o código do register.html para enviar os dados de cadastro diretamente para uma planilha do Google Sheets.

10/05/2025 – Autor: Danilo Herculano
- Atualizado o código do login.html para permitir login dos usuários com base nos dados armazenados na planilha do Google Sheets.

12/05/2025 – Autor: Danilo Herculano
- Modificado o código do customer_area.html para exibir os dados do usuário logado, recuperando-os diretamente do Google Sheets.

13/05/2025 – Autor: Danilo Herculano
- Implementada funcionalidade de recuperação de senha no login.html, permitindo que o usuário informe seu e-mail para validação. Caso o e-mail seja encontrado, a senha correspondente é retornada.

22/05/2025 – Autor: Danilo Herculano
- Implementada a opção de selecionar um endereço personalizado para entrega durante o processo de locação (encomendar.html).
- Dados do aluguel agora são enviados automaticamente para a planilha do Google Sheets, possibilitando futura recuperação na área do cliente.

23/05/2025 – Autor: Danilo Herculano
- Adicionada exibição dos itens alugados na área do cliente (customer_area.html), na seção Meus Pedidos Realizados.
  
Pendências e Correções Futuras
- Ver aba "Issues" - https://github.com/DaniloHerculano/Mercurio-2.0_PI3/issues
