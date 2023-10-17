import Alert from 'react-bootstrap/Alert';

function ExercicioScreen() {
  return (
    <>
      {[
        'primary',
       
       
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
         
          <Alert.Link href="https://images.app.goo.gl/oBg6wcfgWobJxLLMA">Clique aqui</Alert.Link> para ver um gato bobão!!
    
        </Alert>
      ))}
    </>
  );
}



export default ExercicioScreen ;