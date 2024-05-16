//Se a cobra comer o alimento
if (cobraEixoX == appleX && cobraEixoY == appleY) {
  tamanhoCauda++;
  appleX = Math.floor(Math.random() * tamanhoTela);
  appleY = Math.floor(Math.random() * tamanhoTela);
}
