/* Calendário público — baseado na lista de feriados/recessos da escala oficial.
   Feriados não aparecem como passeios regulares. Eventos Especiais são separados.
   Para bloqueios pontuais, edite datasSemOperacao em conteudo.js. */
(function () {
  const diasFixosSemOperacao = new Set([
    '01-01', // Confraternização Universal
    '01-25', // Aniversário da cidade de São Paulo
    '04-21', // Tiradentes
    '05-01', // Dia do Trabalho
    '07-09', // Data Magna do Estado de São Paulo
    '09-07', // Independência
    '10-12', // Nossa Senhora Aparecida
    '11-02', // Finados
    '11-15', // Proclamação da República
    '11-20', // Consciência Negra
    '12-24', // Recesso do projeto na véspera de Natal
    '12-25', // Natal
    '12-31'  // Recesso do projeto na véspera de Ano Novo
  ]);

  function pascoa(ano) {
    const a=ano%19,b=Math.floor(ano/100),c=ano%100,d=Math.floor(b/4),e=b%4;
    const f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3);
    const h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4;
    const l=(32+2*e+2*i-h-k+7)%7,m=Math.floor((a+11*h+22*l)/451);
    const mes=Math.floor((h+l-7*m+114)/31),dia=(h+l-7*m+114)%31+1;
    return new Date(Date.UTC(ano,mes-1,dia,12));
  }
  function iso(data){return data.toISOString().slice(0,10)}
  function deslocar(data,dias){const copia=new Date(data);copia.setUTCDate(copia.getUTCDate()+dias);return iso(copia)}

  function isClosedDate(dataISO,bloqueiosAdicionais=[]) {
    const data=new Date(dataISO+'T12:00:00Z');
    if(Number.isNaN(data.getTime()))return true;
    if(data.getUTCDay()===0)return true; // domingo: só eventos especiais anunciados
    if(diasFixosSemOperacao.has(dataISO.slice(5)))return true;
    if(bloqueiosAdicionais.includes(dataISO))return true;
    const feriadoMovel=pascoa(data.getUTCFullYear());
    return dataISO===deslocar(feriadoMovel,-2) // Sexta-feira Santa
      || dataISO===deslocar(feriadoMovel,60); // Corpus Christi (São Paulo)
  }
  window.GIRO_CALENDARIO={isClosedDate};
})();
