import React from "react";
import { Link } from "react-router-dom";
import styles from "./FooterNav.module.scss";

const FooterNav = () => {
	return (
		<section className={styles.stickyNav}>
			<ul className={styles.navBody}>
				<li className={styles.navItem}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="22"
						viewBox="0 0 22 22"
					>
						<path
							d="M8.839,22.114.661,12.207a1.156,1.156,0,0,1-.245-.8,1.154,1.154,0,0,1,.245-.788L8.839.714a.746.746,0,0,1,1.2,0,1.184,1.184,0,0,1,0,1.449L3.117,10.546h18.45a.948.948,0,0,1,.846,1.025.948.948,0,0,1-.846,1.025H3.375l6.66,8.068a1.184,1.184,0,0,1,0,1.45.746.746,0,0,1-1.2,0Z"
							transform="translate(-0.413 -0.414)"
							fill="#727278"
						/>
					</svg>
				</li>

				<li className={styles.navItem}>
					<Link to="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20.619"
							height="24.432"
							viewBox="0 0 20.619 24.432"
						>
							<path
								d="M11,18.539V31H29.619V18.539L20.2,9Z"
								transform="translate(-10 -7.568)"
								fill="none"
								stroke="#727278"
								strokeWidth="2"
								fillRule="evenodd"
							/>
						</svg>
					</Link>
				</li>

				<li className={styles.navItem}>
					<Link to="/profile">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							viewBox="0 0 22 22"
						>
							<g transform="translate(-65 -704.9)">
								<g transform="translate(65 704.9)">
									<path
										d="M11,22A11,11,0,1,1,22,11,11.012,11.012,0,0,1,11,22Zm0-7.857a4.719,4.719,0,0,0-4.678,4.125,8.646,8.646,0,0,0,9.355,0,4.722,4.722,0,0,0-4.653-4.126ZM11,2.358A8.643,8.643,0,0,0,4.332,16.5a7.07,7.07,0,0,1,3.245-3.832,4.712,4.712,0,1,1,6.845,0A7.058,7.058,0,0,1,17.669,16.5,8.643,8.643,0,0,0,11,2.358Zm0,4.714a2.357,2.357,0,0,0-.022,4.714H11a2.357,2.357,0,1,0,0-4.714Z"
										transform="translate(0 0)"
										fill="#727278"
									/>
								</g>
							</g>
						</svg>
					</Link>
				</li>

				<li className={styles.navItem}>
					<Link to="/search">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							width="24"
							height="24"
						>
							<path
								d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
								fill="#727278"
								strokeWidth="2"
							/>
						</svg>
					</Link>
				</li>
			</ul>
		</section>
	);
};

export default FooterNav;
