## Mapa Interativo com Flask e Folium

Módulo de mapa interativo! Este componente, desenvolvido em Flask e Folium, proporciona uma aplicação web para visualização de mapas e captura de coordenadas.

## Contextualização

### Sobre o Módulo
Este módulo é parte integrante de um projeto maior, dedicado a facilitar a interação com mapas. Desenvolvido em Flask e integrando o Folium, ele proporciona uma experiência prática na visualização e manipulação de dados geoespaciais.

### Funcionalidades Principais
1. **Mapa Interativo:** O Flask é utilizado como framework web para criar uma aplicação interativa com um mapa dinâmico.

2. **Integração com Folium:** A biblioteca Folium desempenha um papel crucial no módulo, permitindo a criação fácil de mapas interativos e a manipulação eficiente de dados geoespaciais.

3. **Captura de Coordenadas:** Uma característica fundamental deste módulo é a capacidade de capturar coordenadas de latitude e longitude diretamente do mapa. Isso pode ser especialmente útil para geocalização das fazendas dos produtores

## Configuração e Uso

### Requisitos
Certifique-se de ter Python instalado em sua máquina. Instale as dependências necessárias executando o seguinte comando:
```bash
pip install flask folium
```

### Executando a Aplicação
Para iniciar o servidor Flask, utilize o seguinte comando:
```bash
python app.py
```
Acesse a aplicação em seu navegador, geralmente em [http://localhost:5000](http://localhost:5000).

## Entendendo o Código
O arquivo `app.py` contém a lógica principal do aplicativo. Aqui estão algumas explicações importantes:

- **Rota `/`:** Esta rota renderiza a página inicial, que pode ser personalizada no arquivo `index.html` localizado na pasta `templates`.

- **Rota `/get_coordinates`:** Esta rota é acionada por uma solicitação POST e recebe dados JSON contendo informações de latitude e longitude. A lógica dentro desta rota pode ser personalizada para realizar ações específicas, como armazenar os dados em um banco de dados.

Aproveite explorando o mapa e utilizando as funcionalidades oferecidas por este módulo de mapa interativo!
