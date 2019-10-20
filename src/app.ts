import HeaderComponent from './header/header.component';

// Root
const root = document.getElementById('root');

(async function(){

    // Components
    const headerComponent = await new HeaderComponent(root.querySelector('header-component'));

    // Rendering Components
    headerComponent.render();
})();