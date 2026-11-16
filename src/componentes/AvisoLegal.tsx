type AvisoLegalProps = {
  nomeDoProjeto: string;
};

function AvisoLegal({ nomeDoProjeto }: AvisoLegalProps) {
  return (
    <aside aria-label="Aviso legal">
      <p>
        {nomeDoProjeto} é um projeto independente, de estudo. Não é endossado
        pela Riot Games e não reflete as opiniões da Riot Games nem de qualquer
        pessoa oficialmente envolvida na produção ou na gestão das propriedades
        da Riot Games.
      </p>
      <p lang="en">
        {nomeDoProjeto} isn't endorsed by Riot Games and doesn't reflect the
        views or opinions of Riot Games or anyone officially involved in
        producing or managing Riot Games properties. Riot Games, and all
        associated properties are trademarks or registered trademarks of Riot
        Games, Inc.
      </p>
    </aside>
  );
}

export default AvisoLegal;
