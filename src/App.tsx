import './tailwind.tw.css';
import ProviderButton from 'component1/button';
import ShortText from 'component1/short-text';
import Form from 'component1/generic';
//import ViteButton from 'viteRemote/button';
//import ShortText from 'viteRemote/shorttext';

//import Theme from 'viteRemote/theme';


const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        <ProviderButton size="large" type="ok">
          TEST
        </ProviderButton>


        {/* <ViteButton size="large" type="ok">
          TEST
        </ViteButton> */}

        <ShortText label="test123" />
      </div>
      <div className='container'>
        <Form serviceCode={"generic"} form={
          {
            sections: [
              {
                name: "Section 1",
                description: "This is the first section",
                elements: [
                  {
                    type: "header",
                    config: {
                      label: "Hello World",
                    }
                  },
                  {
                    type: "short_text",
                    name: "fullname",
                    config: {
                      label: "Name",
                      isRequired: true
                    }
                  }
                ]
              }
            ]

          }} />
      </div>
    </div>
  );
};

export default App;
