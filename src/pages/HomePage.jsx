

import {Link} from 'react-router-dom'


const HomePage = () =>{
    


    return(
        <div>
            <header class="site-header">
            <div class="wrapper site-header__wrapper">
                <Link href="/user/home" class="brand">Brand</Link>

                    <nav class="nav">
                        <ul class="nav__wrapper">
                            <li class="nav__item"><a href="/user/home">Home</a></li>
                            <li class="nav__item"><a href="#">About</a></li>
                            <li class="nav__item"><a href="#">Services</a></li>
                            <li class="nav__item"><a href="/user/login">Sign in</a></li>
                            <li class="nav__item"><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}
export default HomePage