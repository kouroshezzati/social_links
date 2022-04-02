import { useFormik } from 'formik';
import {
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  SvgIconProps,
  TextField,
} from '@mui/material';
import styled from '@emotion/styled';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import i18next from '../../i18n';

const CustomPaper = styled(Paper)`
  h4 {
    svg {
      vertical-align: middle;
    }
  }
`;

const socialNetworks: Record<string, SvgIconProps> = {
  twitter: <TwitterIcon />,
  facebook: <FacebookIcon />,
};

export default function SocialAppForm({
  operationType = 'add',
}: {
  operationType: 'add' | 'edit';
}) {
  const { t } = i18next;
  const { isSubmitting, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      network: 'twitter',
      link: '',
      id: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <CustomPaper elevation={0} style={{ padding: '20px' }}>
      <h4>
        {operationType == 'add' ? <AddIcon /> : <EditIcon />}
        {t('contact link', { operationType: t(operationType) })}
      </h4>
      <form style={{ width: '100%' }} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <TextField
              select
              onChange={handleChange}
              label={t('Type')}
              value={values.network}
              name='network'
              required
              fullWidth
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {socialNetworks[values.network]}
                  </InputAdornment>
                ),
              }}
            >
              {Object.keys(socialNetworks).map((name: string) => (
                <MenuItem key={name} value={name}>
                  {t(name)}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label='link'
              name='link'
              type='url'
              value={values.link}
              onChange={handleChange}
              size='small'
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label='ID'
              name='id'
              value={values.id}
              onChange={handleChange}
              size='small'
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent='flex-end'
          style={{ paddingTop: '15px' }}
        >
          <Grid item>
            <Button size='small' variant='outlined' disabled={isSubmitting}>
              {t('cancel')}
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{ backgroundColor: '#ffc107', color: '#001e3c' }}
              variant='outlined'
              disabled={isSubmitting}
              type='submit'
              size='small'
              fullWidth
            >
              {`${t('contact link', { operationType: t(operationType) })} ${t(
                values.network.toLowerCase()
              )}`}
            </Button>
          </Grid>
        </Grid>
      </form>
    </CustomPaper>
  );
}
