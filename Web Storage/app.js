
localStorage.setItem('myData', 'Це мій текстовий рядок');

const themeMod = ()=> {
    const selectedTheme = document.cookie.split(';').find(c => c.trim().startsWith('theme='))?.split('=')[1];;
    console.log(selectedTheme);
    switch (selectedTheme) {
        case 'auto':
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
                document.body.classList.add('dark');
            }else{
                document.body.classList.remove('dark');
            }
            break;
        case 'dark':
            document.body.classList.add('dark');
            break;
        case 'light':
            document.body.classList.remove('dark');
            break;
        default:
            break;
    }
}

