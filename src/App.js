import React from 'react';

const App = () => {
	return (
		<div className="contenedor">
			<div className="registrate">
				<h1>Registrate</h1>
				<form className="formulario" action="" onSubmit={submit}>
					<input type="text" name="usuario" id="usuario" placeholder="Usuario" />
					<input type="password" name="password" id="password" placeholder="Contraseña" />
					<input type="password" name="password2" id="password2" placeholder="Repetir Contraseña" />
					<div className="recaptcha">
					</div>
					<button type="submit">Iniciar Sesion</button>
				</form>
			</div>
			<div>
				<h1>Bienvenido</h1>
			</div>
		</div>
	);
}
 
export default App;