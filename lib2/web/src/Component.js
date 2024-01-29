import React from "react";
import { formatRelative, subDays } from "date-fns";

export const Component = ({ locale }) => (
	<div style={{ border: "5px solid darkred", marginBlock: "20px" }}>
		<p>I'm a Component exposed from container C!</p>
		<p>
			Using date-fn in Remote:{" "}
			{formatRelative(subDays(new Date(), 3), new Date(), { locale })}
		</p>
	</div>
);
