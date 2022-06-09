import { IconProps } from '@/models/component';

const CompanyBuildingColorIcon = ({ width, height }: IconProps) => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width={width} height={height}>
			<g fill="none">
				<path d="M0,172v-172h172v172z" fill="none"></path>
				<g>
					<path d="M150.5,146.91667h-50.16667v-89.58333h35.83333c7.87975,0 14.33333,6.45358 14.33333,14.33333z" fill="#8c82ec"></path>
					<path d="M100.33333,146.91667h50.16667v7.16667h-50.16667z" fill="#efeefc"></path>
					<path
						d="M121.83333,75.25h14.33333v14.33333h-14.33333zM121.83333,100.33333h14.33333v14.33333h-14.33333zM121.83333,125.41667h14.33333v14.33333h-14.33333z"
						fill="#efeefc"
					></path>
					<g>
						<path d="M32.25,17.91667h71.66667v14.33333h-71.66667z" fill="#5b4fe3"></path>
						<path
							d="M114.66667,146.91667h-93.16667v-111.08333c0,-3.94167 3.225,-7.16667 7.16667,-7.16667h78.83333c3.94167,0 7.16667,3.225 7.16667,7.16667z"
							fill="#efeefc"
						></path>
						<path d="M21.5,146.91667h93.16667v7.16667h-93.16667z" fill="#5b4fe3"></path>
						<path
							d="M60.91667,118.25h14.33333v21.5h-14.33333zM35.83333,118.25h14.33333v21.5h-14.33333zM86,118.25h14.33333v21.5h-14.33333zM60.91667,68.08333h14.33333v14.33333h-14.33333zM35.83333,68.08333h14.33333v14.33333h-14.33333zM86,68.08333h14.33333v14.33333h-14.33333zM60.91667,93.16667h14.33333v14.33333h-14.33333zM35.83333,93.16667h14.33333v14.33333h-14.33333zM86,93.16667h14.33333v14.33333h-14.33333zM60.91667,43h14.33333v14.33333h-14.33333zM35.83333,43h14.33333v14.33333h-14.33333zM86,43h14.33333v14.33333h-14.33333z"
							fill="#5b4fe3"
						></path>
					</g>
				</g>
			</g>
		</svg>
	);
};

CompanyBuildingColorIcon.defaultProps = {
	width: '55px',
	height: '55px',
};
export default CompanyBuildingColorIcon;
