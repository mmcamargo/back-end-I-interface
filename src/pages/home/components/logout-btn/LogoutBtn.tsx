import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../shared/hooks';
import { handleLogout } from '../../functions';

const LogoutBtn = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return (
		<Button onClick={() => handleLogout(dispatch, navigate)}>Sair</Button>
	);
};

export default LogoutBtn;