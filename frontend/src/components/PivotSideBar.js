import { Box, Button, Divider, Drawer, Stack, SvgIcon, Typography } from '@mui/material';
import { Scrollbar } from './Scrollbar';
import {CategoryList} from './MultiSelect';

const SIDE_NAV_WIDTH = 280;


export const SideNav = (props) => {
  const { color = 'evident', sections = [] } = props;

  return (
    <Drawer
      anchor="left"
      open
      PaperProps={{
        sx: {
          backgroundColor: 'var(--nav-bg)',
          borderRightColor: 'var(--nav-border-color)',
          borderRightStyle: 'solid',
          borderRightWidth: 1,
          color: 'var(--nav-color)',
          width: SIDE_NAV_WIDTH
        }
      }}
      variant="permanent"
    >
        <Stack sx={{ height: '100%'}}>
          <Stack
            component="nav"
            spacing={2}
            sx={{
              flexGrow: 1,
              //px: 2
            }}
          >
              <SideBarSections subheader="ORIGINAL DATA" statedata={props.statedata}/>
          </Stack>
        </Stack>
      {/* </Scrollbar> */}
    </Drawer>
  );
};

// SideNav.propTypes = {
//   color: PropTypes.oneOf(['blend-in', 'discreet', 'evident']),
//   sections: PropTypes.array
// };

export default SideNav


const SideBarSections = (props) =>{
    const { subheader = '', ...other } = props;
    return (
    <Stack
        // component="ul"
        spacing={0.1}
        sx={{
          listStyle: 'none',
          m: 0,
          p: 0
        }}
        {...other}>
       
       <CategoryList statedata={props.statedata}/> 
      </Stack>
    )
}