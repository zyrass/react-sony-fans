function HomePage() {
  return (
    <div className="card">
      <h1 className="m-30 d-flex justify-center upper">
        Bienvenue sur Sony Gaming Fans
      </h1>
      <p>
        Tu découvriras une sélection personnel de jeu que j'affectionne et qui
        ont été aimé par d'innombrable fans.
      </p>

      <div className="alert alert-danger">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p>Je ne fournirais pas d'ISO quelconque sur cette page</p>
      </div>

      <hr className="my-20" />
      <h3 className="mb-20">🎓 L'émulation c'est quoi ?</h3>
      <p className="px-10 mb-20">
        La définition du terme émuler est «{" "}
        <strong>simuler, sur un ordinateur, le comportement de</strong> ». Il
        faut voir dans l'émulation une imitation du comportement physique d'un
        matériel par un logiciel, et ne pas le confondre avec la simulation,
        laquelle vise à imiter un modèle abstrait.
        <br />
        <br />
        L'émulateur reproduit le comportement d'un modèle dont toutes les
        variables sont connues, alors que le simulateur tente de reproduire un
        modèle mais en devant extrapoler une partie des variables qui lui sont
        inconnues
        <br />(<em>exemple : la simulation du comportement d'un trou noir</em>).
        <br />
        <br />
        Le recours à un émulateur, selon le contexte, permet de faciliter le
        développement ou le débogage d'un système ou de remplacer un système
        obsolète ou inutilisable par un autre. Dans ce cadre, il est possible de
        faire fonctionner le nouveau système, l'émulateur, de la même manière
        que le système imité.
      </p>

      <p className="text-lead">
        source:
        <a
          href="https://fr.wikipedia.org/wiki/%C3%89mulation"
          target="_blank"
          rel="noreferrer"
        >
          wikipedia
        </a>
      </p>
    </div>
  );
}

export default HomePage;
