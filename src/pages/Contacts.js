const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Контакти</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Місце знаходження</h2>
						<p>Рівне, Україна</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram </h2>
						<p>
							<a href="tel:+380680584639">+38(068) 05-84-639</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:YouSwee@gmail.com">
								YouSwee@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;