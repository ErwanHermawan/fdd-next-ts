import { ISystemIcon } from "./type";

const SystemIcon = ({ name }: ISystemIcon) => {
	const classNames = `ci-${name}`;

	return <i className={classNames}></i>;
};

export default SystemIcon;
