# Plooclients

Esse é um projeto onde você terá visualização de todos os clientes da sua conta da Ploomes, podendo editá-los e deletá-los.

# Autenticação

Você pode se autenticar no aplicativo criando um usuário de integração na sua conta Ploomes e copiando a chave na tela inicial do aplicativo, e depois disso clicar no botão enviar, onde você guardará sua chave localmente, e logo após, entrará na página inicial.

# Página Inicial

Na página inicial você vai se deparar com uma listagem dos clientes, mostrando algumas informações básicas como Nome, Id, CNPJ ou CPF, E-mail e Telefone, você pode também clicar nesses clientes para entrar e ver mais informações ou buscar na barra.

# Dark Mode 

Ao lado direito do nome do aplicativo Plooclients, existe um botão que toggla o Dark Mode, podendo assim, deixar o aplicativo mais escuro para melhor leitura noturna.

# Menu

Ao lado esquerdo temos a opção de sair do aplicativo, que funciona como um logoff, e temos também um botão para ir à tela de criação de clientes.

# Barra de Busca

Acima da listagem temos uma barra de busca feita para buscar por Nome, Email ou Número de Telefone e CPF/CNPJ também.

# Lista de Clientes

A lista em si, é uma tabela que conta com um infinite scrolling para buscar cada vez mais clientes caso queira descer, e o infinite scrolling funciona também com a busca ativa.

# Modal de Cliente

Ao selecionar uma linha, você abre a página do cliente selecionado liberando algumas opções e revelando também informações do endereço do cliente e o tipo do cliente.

## Ações do Modal de Cliente

### Barra de Navegação

Você dentro do modal de cliente, terá o parâmetro do Id na barra de navegação caso queira mandar para algum colega um cliente.

### Botão de Edição

Ao clicar no botão de edição você habilitará o modo edição, revelando inputs para preencher com valores desejados.

Valores já preenchidos ficarão com um placeholder para identificar.

Valores não preenchidos não serão alterados.

### Botão de Deleção

Ao clicar no botão de deleção, você abrirá um novo modal para confirmar a deleção do cliente em questão.

### Botão de Voltar

Caso esteja satisfeito com suas mudanças no cliente, poderá voltar a página de navegação de clientes ao clicar neste botão.

### Botão de Atualizar

Caso queira refrescar as informações do cliente, caso tenha feito alguma alteração no Ploomes ou quer verificar se alguém alterou no meio tempo que estava com a página aberta, pode clicar que outra requisição será feita, atualizando o cliente.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
