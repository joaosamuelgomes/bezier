# Interactive Bézier Curve Visualizer

## Descrição

Este projeto é uma ferramenta interativa para visualizar Curvas de Bézier diretamente em seu navegador. Utilizando um canvas HTML, os usuários podem criar e manipular Curvas de Bézier lineares, quadráticas e cúbicas com pontos de controle ajustáveis através de cliques e arraste do mouse. É uma ferramenta educacional que pode ser usada para entender melhor os conceitos matemáticos por trás das Curvas de Bézier, bem como um recurso prático para designers e desenvolvedores gráficos.

## Linguagens Utilizadas

- HTML5
- CSS3
- JavaScript

## Utilização

O visualizador de Curvas de Bézier é ideal para estudantes e profissionais que desejam explorar a matemática das curvas de Bézier e ver resultados instantâneos de suas manipulações. Pode ser usado como uma ferramenta de ensino em matemática aplicada, computação gráfica ou design de produto.

## Instruções para Download e Utilização

1. **Download:**
    - Opção 1: **Git Clone**
      Abra o terminal e execute o seguinte comando:
      ```sh
      git clone git@github.com:joaosamuelgomes/bezier.git
      ```
    - Opção 2: **Download Direto**
      - Vá para `https://github.com/joaosamuelgomes/bezier`
      - Clique no botão `Code` e em seguida em `Download ZIP`
      - Descompacte o arquivo no seu computador.

2. **Uso:**
    - Abra o arquivo `index.html` em um navegador moderno.
    - Utilize o mouse para clicar no canvas e criar pontos de controle para as curvas de Bézier.
    - Arraste os pontos para ajustar a forma das curvas.
    - Observe as curvas se ajustando em tempo real à medida que você move os pontos.

## Desenho Interativo de Curvas de Bézier em Canvas

Esta seção da documentação oferece detalhes sobre os processos matemáticos e as funções em JavaScript utilizadas para desenhar interativamente pontos, linhas e curvas de Bézier dentro de um elemento canvas.

### Funções

- `drawPoint(point, color)`: Cria um círculo preenchido que representa um ponto no canvas, baseando-se na equação matemática de um círculo.

- `drawLine(start, end, color)`: Renderiza uma linha reta entre dois pontos, seguindo a representação matemática de uma equação linear que passa por esses pontos.

- `drawQuadraticBezier(start, control, end, color)`: Desenha uma curva quadrática de Bézier, definida pelos pontos inicial, de controle e final. A equação da curva é paramétrica, misturando os pontos com base no parâmetro que varia de 0 a 1.

- `drawCubicBezier(start, control1, control2, end, color)`: Semelhante à quadrática, esta funcionalidade desenha uma curva cúbica de Bézier. Ela envolve um ponto de controle adicional, fornecendo um maior grau de curvatura.

- `isNearPoint(x, y, target, radius)`: Usa o teorema de Pitágoras para determinar se uma coordenada dada está dentro de um raio especificado de um ponto alvo.

- `draw()`: Função que limpa o canvas e invoca condicionalmente o desenho de linhas e curvas de Bézier com base no número de pontos definidos.

### Eventos do Mouse

- `mousedown`, `mousemove`, `mouseup`, `mouseleave`: Estes eventos lidam com as interações do usuário, permitindo o movimento de pontos existentes ou a adição de novos para definir as curvas.

### Inicialização

- `DOMContentLoaded`: Garante que a lógica de desenho seja inicializada apenas após o carregamento completo do conteúdo da página, incluindo o DOM.

- `reloadButton`: Associado a um botão para recarregar a aplicação inteira, redefinindo o estado do desenho.

### Explicação do Desenho Interativo

Esta aplicação permite que os usuários desenhem curvas de Bézier de forma interativa, colocando e arrastando pontos no canvas. Aqui está um resumo do processo de desenho:

1. **Linha Reta**: Quando dois pontos são colocados, uma linha reta é desenhada.
2. **Curva de Bézier Quadrática**: Com três pontos, a aplicação renderiza uma curva de Bézier quadrática que passa pelos pontos inicial e final, com o segundo ponto atuando como ponto de controle para definir a forma da curva.
3. **Curva de Bézier Cúbica**: Quatro pontos permitem a criação de uma curva de Bézier cúbica, com o terceiro ponto se tornando o segundo ponto de controle, possibilitando curvas mais complexas e nuances.

Use o canvas para desenhar livremente e compreender a beleza geométrica das curvas de Bézier!

## Equipe de Desenvolvimento

- João Samuel Gomes
- Jocemara Padilha

## Suporte

Para suporte, entre em contato com um dos membros da equipe de desenvolvimento.

Aproveite a ferramenta e tenha uma ótima experiência visualizando e aprendendo sobre Curvas de Bézier!
