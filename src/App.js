import * as React from "react";
import './App.css';
import { NextUIProvider } from "@nextui-org/react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Menu } from "./components/menu";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/progress";



const PetIcon = (props) => {
  return (
    <svg
      {...props}

      fill="currentColor" width="1.5em" height="1.5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.2">
        <path d="M176,144H16v40a8,8,0,0,0,8,8H44a24,24,0,0,1,48,0h72a23.99048,23.99048,0,0,1,11.99813-20.78815Z" />
      </g>
      <g opacity="0.2">
        <path d="M212,192a24.00631,24.00631,0,0,0-36.00187-20.78815L176,120h64v64a8,8,0,0,1-8,8H212" />
      </g>
      <path d="M247.99682,119.94092c-.00073-.084-.00952-.168-.01269-.252-.00855-.22216-.02271-.44287-.04907-.66015-.01148-.09424-.02808-.188-.04322-.28223-.03393-.21631-.07568-.4292-.12695-.63965-.02051-.08447-.0415-.16845-.06494-.25293q-.10035-.36108-.23364-.708c-.0149-.03858-.02344-.07862-.03882-.11719l-.04956-.12354-.01075-.02734-13.928-34.82031A15.92368,15.92368,0,0,0,218.58374,72h-34.584V64a8.00039,8.00039,0,0,0-8-8h-152a16.01833,16.01833,0,0,0-16,16V184a16.01833,16.01833,0,0,0,16,16h13.0127a32.00444,32.00444,0,0,0,61.97461,0h58.02539a32.00444,32.00444,0,0,0,61.97461,0h13.01269a16.01833,16.01833,0,0,0,16-16V120C247.99975,119.98,247.99682,119.96094,247.99682,119.94092ZM218.58374,88l9.59961,24h-44.1836V88Zm-50.584-16v64h-144V72Zm-144,80h144v15.04687A32.06465,32.06465,0,0,0,157.01245,184H98.98706a32.00444,32.00444,0,0,0-61.97461,0H23.99975Zm44,56a16,16,0,1,1,16-16A16.01833,16.01833,0,0,1,67.99975,208Zm120,0a16,16,0,1,1,16-16A16.01833,16.01833,0,0,1,187.99975,208Zm44-24H218.98706a31.93034,31.93034,0,0,0-34.98731-23.74121V128h48Z" />
    </svg>
  );
};

export default function App() {
  const [selectedSimulador, setSelectedSimulador] = React.useState("");
  const [selectedModel, setSelectedModel] = React.useState("");
  const [selectedForm, setSelectedForm] = React.useState("");
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [submitForm, setSubmitForm] = React.useState(false);


  const submit = () => {
    setIsLoaded(true);
    setTimeout(() => {
      setIsLoaded(false);
      setSubmitForm(true);
    }, 2000);
  };


  React.useEffect(() => {
    console.log("selectedSimulador", selectedSimulador);
    console.log("selectedModel", selectedModel);
    console.log("selectedForm", selectedForm);
  }, [selectedSimulador, selectedModel, selectedForm]);



  const simuladorData = {
    "Simulador de Custo de Transporte": [
      { tipo: "Custos Hidroviários - Alta restrição", tipoforms: { "Carga Geral": true, "Carga Geral Contenizada": true, "Granel Líquido": true, "Granel Sólido Agrícola": true, "Granel Sólido Não Agrícola": true, CG: false, GSA: false } },
      { tipo: "Custos Hidroviários - Média restrição", tipoforms: { "Carga Geral": true, "Carga Geral Contenizada": true, "Granel Líquido": true, "Granel Sólido Agrícola": true, "Granel Sólido Não Agrícola": true, CG: false, GSA: false } },
      { tipo: "Custos Hidroviários - Baixa restrição", tipoforms: { "Carga Geral": true, "Carga Geral Contenizada": true, "Granel Líquido": true, "Granel Sólido Agrícola": true, "Granel Sólido Não Agrícola": true, CG: false, GSA: false } },
      { tipo: "Custos Rodoviários", tipoforms: { "Carga Geral": true, "Carga Geral Contenizada": true, "Granel Líquido": true, "Granel Sólido Agrícola": true, "Granel Sólido Não Agrícola": true, CG: false, GSA: false } },
      { tipo: "Custos Hidroviários - Cabotagem", tipoforms: { "Carga Geral": true, "Carga Geral Contenizada": true, "Granel Líquido": true, "Granel Sólido Agrícola": true, "Granel Sólido Não Agrícola": true, CG: false, GSA: false } },
      { tipo: "Custos Ferroviários - com tarifas acessórias", tipoforms: { "Carga Geral": true, "Carga Geral Contenizada": true, "Granel Líquido": true, "Granel Sólido Agrícola": true, "Granel Sólido Não Agrícola": true, CG: false, GSA: false } },
      { tipo: "Custos Ferroviários - sem tarifas acessórias", tipoforms: { "Carga Geral": true, "Carga Geral Contenizada": true, "Granel Líquido": true, "Granel Sólido Agrícola": true, "Granel Sólido Não Agrícola": true, CG: false, GSA: false } },
    ],
    "Simulador de Custo de Transbordo": [
      { tipo: "Hidro-Ferro-Hidro", tipoforms: { CG: true, GSA: false } },
      { tipo: "Hidro-Rodo-Hidro", tipoforms: { CG: true, GSA: false } },
      { tipo: "Rodo-Ferro-Rodo", tipoforms: { CG: true, GSA: false } },
      { tipo: "Ferro-Ferro", tipoforms: { CG: true, GSA: true } },
      { tipo: "Rodo-Ferro", tipoforms: { CG: false, GSA: true } },
      { tipo: "Ferro-Rodo", tipoforms: { CG: false, GSA: true } },
      { tipo: "Hidro-Rodo", tipoforms: { CG: false, GSA: true } },
      { tipo: "Rodo-Hidro", tipoforms: { CG: false, GSA: true } },
      { tipo: "Hidro-Ferro", tipoforms: { CG: false, GSA: true } },
      { tipo: "Ferro-Hidro", tipoforms: { CG: false, GSA: true } },
    ],
    "Simulador de Gases de Efeito Estufa (GEE)": [
      { tipo: "Transporte Cabotagem", tipoforms: { tks: true } },
      { tipo: "Transporte Ferroviario", tipoforms: { tks: true } },
      { tipo: "Transporte Hidroviario", tipoforms: { tks: true } },
      { tipo: "Transporte Rodoviario", tipoforms: { tks: true } },
    ],
    "Calculadora de Empregos": [
      { tipo: "Calculadora de geração de empregos", tipoforms: { ge: true } },
    ],
  };
  return (

    <NextUIProvider>
      <Menu />
      <main className="container mx-auto max-w-7xl  px-6 flex-grow">

        <section className="flex flex-col items-center justify-center">
          <Card className="w-full lg:p-4">
            <CardBody>
              <div className=" grid lg:grid-cols-2 grid-cols-1 gap-4  ">
                <div className="flex flex-col gap-5 lg:border-r border-default-200 p-4 ">
                  <h1>Payment details</h1>
                  <Select
                    label="Select a Simulador"
                    placeholder="Search for a Simulador"
                    startContent={<PetIcon className="text-xl" />}
                    variant="bordered"
                  >
                    {Object.keys(simuladorData).map((item) => (
                      <SelectItem
                        onPress={() => {
                          setSelectedSimulador(item);
                          setSelectedModel(""); // Limpa o estado selectedModel
                          setSelectedForm(""); // Limpa o estado selectedForm
                        }}
                        key={item}
                        value={item}
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </Select>

                  <Select
                    label="Select a model"
                    placeholder="Search for a model"
                    startContent={<PetIcon className="text-xl" />}
                    variant="bordered"
                  >
                    {simuladorData[selectedSimulador]?.map((item) => (
                      <SelectItem
                        onPress={() => setSelectedModel(item.tipo)}
                        key={item.tipo} value={item.tipo}>
                        {item.tipo}
                      </SelectItem>
                    ))}

                  </Select>

                  <Select
                    label="Select a model"
                    placeholder="Search for a model"
                    startContent={<PetIcon className="text-xl" />}
                    variant="bordered"
                    isDisabled={selectedSimulador === "Simulador de Gases de Efeito Estufa (GEE)" || selectedSimulador === "Calculadora de Empregos"}
                  >
                    {selectedModel &&
                      Object.keys(simuladorData[selectedSimulador]
                        .find(item => item.tipo === selectedModel)
                        .tipoforms)
                        .filter(key => simuladorData[selectedSimulador]
                          .find(item => item.tipo === selectedModel)
                          .tipoforms[key] === true) // Filtra apenas os que são true
                        .map((item) => (
                          <SelectItem
                            onPress={() => setSelectedForm(item)}

                            key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))
                    }

                  </Select>
                  {(selectedForm && selectedForm.trim() !== "" &&
                    (selectedModel === "Custos Hidroviários - Alta restrição" ||
                      selectedModel === "Custos Hidroviários - Média restrição" ||
                      selectedModel === "Custos Hidroviários - Baixa restrição" ||
                      selectedModel === "Custos Hidroviários - Cabotagem" ||
                      selectedModel === "Custos Ferroviários - com tarifas acessórias" ||
                      selectedModel === "Custos Ferroviários - sem tarifas acessórias")) ? (
                    <Input
                      labelPlacement="outside"
                      placeholder="0.00"
                      startContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">Km</span>
                        </div>
                      }
                      label={
                        selectedForm === "Carga Geral" ? "CG Distância inserida (Km)" :
                          selectedForm === "Carga Geral Contenizada" ? "CG Conteinerizada Distância inserida (Km)" :
                            selectedForm === "Granel Líquido" ? "GL Distância inserida (Km)" :
                              selectedForm === "Granel Sólido Agrícola" ? "GSA Distância inserida (Km)" :
                                selectedForm === "Granel Sólido Não Agrícola" ? "GSNA Distância inserida (Km)" : ""
                      }
                    />
                  ) : null}

                  {(selectedForm && selectedForm.trim() !== "" &&
                    (selectedModel === "Hidro-Ferro-Hidro" ||
                      selectedModel === "Hidro-Rodo-Hidro" ||
                      selectedModel === "Rodo-Ferro-Rodo" ||
                      selectedModel === "Ferro-Ferro" ||
                      selectedModel === "Rodo-Ferro" ||
                      selectedModel === "Ferro-Rodo" ||
                      selectedModel === "Hidro-Rodo" ||
                      selectedModel === "Rodo-Hidro" ||
                      selectedModel === "Hidro-Ferro" ||
                      selectedModel === "Ferro-Hidro")) ? (
                    <div className="lg:grid-cols-2 grid-cols-1 gap-4 grid">
                      <Input
                        labelPlacement="outside"
                        placeholder="0.00"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">ton/ano</span>
                          </div>
                        }
                        label={
                          selectedForm === "CG" ? "Movimentação CG (ton/ano)" :
                            selectedForm === "GSA" ? "Movimentação GSA (ton/ano)" : ""
                        }
                      />
                      <Input
                        labelPlacement="outside"
                        placeholder="0.00"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">und</span>
                          </div>
                        }
                        label={
                          selectedForm === "CG" ? "Número de funcionários CG (und)" :
                            selectedForm === "GSA" ? "Número de funcionários GSA (und)" : ""
                        }
                      />

                      <Input
                        labelPlacement="outside"
                        placeholder="0.00"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">R$</span>
                          </div>
                        }
                        label={
                          selectedForm === "CG" ? "Salário médio CG (R$)" :
                            selectedForm === "GSA" ? "Salário médio GSA (R$)" : ""
                        }
                      />

                      <Input
                        labelPlacement="outside"
                        placeholder="0.00"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">t/h</span>
                          </div>
                        }
                        label={
                          selectedForm === "CG" ? "Transbordo médio por hora CG (t/h)" :
                            selectedForm === "GSA" ? "Transbordo médio por hora GSA (t/h)" : ""
                        }
                      />

                      <Input
                        labelPlacement="outside"
                        placeholder="0.00"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">dias</span>
                          </div>
                        }
                        label={
                          selectedForm === "CG" ? "Tempo médio de armazenagem CG (dias)" :
                            selectedForm === "GSA" ? "Tempo médio de armazenagem GSA (dias)" : ""
                        }
                      />

                      <Input
                        labelPlacement="outside"
                        placeholder="0.00"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">R$/Kw</span>
                          </div>
                        }
                        label={
                          selectedForm === "CG" ? "Tarifa energia CG (R$/Kw)" :
                            selectedForm === "GSA" ? "Tarifa energia GSA (R$/Kw)" : ""
                        }
                      />
                    </div>

                  ) : null}

                  {(selectedModel === "Transporte Cabotagem" || selectedModel === "Transporte Ferroviario" || selectedModel === "Transporte Hidroviario" || selectedModel === "Transporte Rodoviario") ? (

                    <div className="lg:grid-cols-2 grid-cols-1 gap-4 grid">
                      <Input
                        labelPlacement="outside"
                        placeholder="0.00"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">TKU</span>
                          </div>
                        }
                        label={
                          selectedModel === "Transporte Cabotagem" ? "Volume TKU (TKU)" :
                            selectedModel === "Transporte Ferroviario" ? "Volume TKU (TKU)" :
                              selectedModel === "Transporte Hidroviario" ? "Volume TKU (TKU)" :
                                selectedModel === "Transporte Rodoviario" ? "Volume TKU (TKU)" : ""
                        }
                      />
                      <Input
                        labelPlacement="outside"
                        placeholder="0.00"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">L/1000tku</span>
                          </div>
                        }
                        label={
                          selectedModel === "Transporte Cabotagem" ? "Consumo específico Transporte Cabotagem " :
                            selectedModel === "Transporte Ferroviario" ? "Consumo específico Transporte Ferroviário " :
                              selectedModel === "Transporte Hidroviario" ? "Consumo específico Transporte Hidroviário " :
                                selectedModel === "Transporte Rodoviario" ? "Consumo específico Transporte Rodovíário " : ""
                        }
                      />
                    </div>
                  ) : null}

                  {(selectedModel === "Calculadora de geração de empregos") ? (
                    <div className="lg:grid-cols-2 grid-cols-1 gap-4 grid">
                      <Input
                        labelPlacement="outside"
                        placeholder="0.00"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">R$</span>
                          </div>
                        }
                        label={
                          selectedModel === "Calculadora de geração de empregos" ? "Investimento (R$)" : ""
                        }
                      />
                    </div>
                  ) : null}

                  <Divider />
                  <h1 className="text-sm text-default-400">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut
                  </h1>
                </div>
                <Divider className="lg:hidden" />

                <div className="flex flex-col gap-4 p-4">
                  <h1>
                    {!selectedForm ? "Select a model" : selectedForm}
                  </h1>
                  <div className="flex gap-2 ">
                    <h1 className="text-sm text-default-400">{!selectedSimulador ? "Select a Simulador" : selectedSimulador}</h1>
                    <Divider orientation="vertical" />
                    <h1 className="text-sm text-default-400">{!selectedModel ? "Select a model" : selectedModel}</h1>
                  </div>
                  <Card className="bg-default-100 border border-default-200 shadow-inner p-4 l g:h-full h-72 relative">
                    {isLoaded && (
                      <CircularProgress size="large" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                    <CardBody className={`flex flex-col gap-4 ${submitForm ? "" : "hidden"}`}>
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                          <div>
                            <h1 className="text-default-500 text-sm">
                              Unlimted access x <span>$8.00</span>
                            </h1>
                            <h1 className="inline-flex gap-2 text-default-400 text-sm">
                              1 User
                              <span className="text-primary">Modify seats</span>
                              <span>
                                <Divider orientation="vertical" />
                              </span>
                              <span>Month</span>
                            </h1>
                          </div>
                          <div>
                            <h1 className="text-default-500 text-sm">
                              <span>$8.00</span>
                            </h1>
                          </div>
                        </div>
                        <Divider />
                        <div className="flex justify-between">
                          <div>
                            <h1 className="text-default-400 text-sm">Updates</h1>
                            <h1 className="text-default-500 text-sm w-[80%]">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Iure assumenda sapiente harum.
                            </h1>
                          </div>
                          <div>
                            <h1 className="text-default-500 text-sm">Free</h1>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <div className="flex justify-between">
                    <h1>Custo</h1>
                    <div className="text-right">
                      <h1 className="text-default-500">
                        {submitForm ? "$8.00" : "$0.00"}

                      </h1>+ Taxas
                    </div>
                  </div>
                </div>
              </div>
              <Divider className="my-4" />
            </CardBody>
            <CardFooter>
              <div className="flex justify-between w-full">
                <Button
                  onPress={() => {
                    setSelectedSimulador("");
                    setSelectedModel("");
                    setSelectedForm("");
                    setSubmitForm(false);
                    setIsLoaded(false);
                  }
                  }
                >Clear</Button>
                <Button color="primary"
                  isDisabled={submitForm}
                  onPress={submit}
                >Pay</Button>
              </div>
            </CardFooter>
          </Card>
        </section>
      </main>
    </NextUIProvider >
  );
}