const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      <style>
        {`
          .loader {
              border-top-color: #3498db; // Cor azul para combinar com o esquema
              -webkit-animation: spinner 1.5s linear infinite;
              animation: spinner 1.5s linear infinite;
          }

          @-webkit-keyframes spinner {
              0% { -webkit-transform: rotate(0deg); }
              100% { -webkit-transform: rotate(360deg); }
          }

          @keyframes spinner {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
