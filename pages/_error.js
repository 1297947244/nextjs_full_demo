import PropTypes from 'prop-types';

const Error = ({ statusCode, t }) => {
  console.log(4, statusCode);
  return <p>{statusCode ? t('error-with-status', { statusCode }) : t('error-without-status')}</p>;
};

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null;
  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }
  return {
    namespacesRequired: ['common'],
    statusCode,
  };
};

Error.defaultProps = {
  statusCode: null,
};

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired,
};

export default Error;
