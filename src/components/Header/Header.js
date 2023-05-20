import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Привіт, мене звати <em>Юрій</em>
					</strong>
					<br />я студент Технічного коледжу
				</h1>
				<div className="header__text">
					<p>з пристрастю до навчання та творчості.</p>
				</div>
				<a href="#!" className="btn">
					Загрузити резюме
				</a>
			</div>
		</header>
	);
}

export default Header;