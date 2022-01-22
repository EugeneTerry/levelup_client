import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Wrapper } from "./Styles/Global";
import { GamerProvider } from "./gamer/GamerProvider";

export const LevelUp = () => (

		<Wrapper>
			<GamerProvider>
				<Route
					render={() => {
						if (localStorage.getItem("lu_token")) {
							return (
								<>
									<Route>
										<NavBar />
										<ApplicationViews />
									</Route>
								</>
							);
						} else {
							return <Redirect to="/login" />;
						}
					}}
				/>
				<Route path="/login">
					<Login />
				</Route>

				<Route path="/register">
					<Register />
				</Route>
			</GamerProvider>
		</Wrapper>
    
  
);
