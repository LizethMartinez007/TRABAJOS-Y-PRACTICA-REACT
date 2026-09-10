import HeaderComponent from './HeaderComponent.jsx'
import MainComponent from './MainComponent.jsx'
import FooterComponent from './FooterComponent.jsx'

import NavComponent from './NavComponent.jsx';
import RoutersComponent from './RoutersComponent.jsx';

export default function HomeView() {
  return (
    <>
      <header>
        < NavComponent/>

        <hr/>

        < HeaderComponent />

      </header>

      <main>
        < MainComponent />
        < RoutersComponent />
      </main>

      <footer>
        < FooterComponent />
      </footer>
    </>
  );
}