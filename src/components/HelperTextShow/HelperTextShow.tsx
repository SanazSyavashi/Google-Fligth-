//NODE-MODULES
import { Typography} from '@mui/material';
//IMP-DEPENDENCY
//---------------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HelperTextShow = ({ err }: { err: string | Array<any> }) => {

  const result =
    err && (typeof err === 'string' ? (err) : `${(err[0])} ${err[1].var}`);
  return (
    <Typography
      className='text-xs !mt-1.5 pt-0 pl-0 normal-case !whitespace-normal text-rose-700' >
      <>{result}</>
    </Typography>
  );
};
export default HelperTextShow;
