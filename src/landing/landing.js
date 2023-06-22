import React from "react";
export default function Landing() {


	return (
		<>
			<div className="landing-container">
				<img src="https://i.imgur.com/2PmXyEp.png" class="img-fluid img-logo" alt="Responsive image"></img>
				<div className="input-landing">
					<div class="input-group flex-nowrap">
						<input class="form-control" type="text" placeholder="Search build" />
						<span class="input-group-btn">
							<button class="btn btn-default" type="button">
								<span class="glyphicon glyphicon-search"></span>
							</button>

						</span>

					</div>
				</div>
			</div >
		</>

	)
}
