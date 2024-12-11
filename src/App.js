import * as React from "react";
import './App.css';
import { NextUIProvider } from "@nextui-org/react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Menu } from "./components/menu";
import { Button } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";


const PetIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M19.0803 15.7203C18.4903 12.1903 15.1003 9.32031 11.5203 9.32031C7.63028 9.32031 4.21028 12.4703 3.88028 16.3503C3.75028 17.8503 4.23028 19.2703 5.22028 20.3403C6.20028 21.4103 7.58028 22.0003 9.08028 22.0003H13.7603C15.4503 22.0003 16.9303 21.3403 17.9403 20.1503C18.9503 18.9603 19.3503 17.3803 19.0803 15.7203Z"
        fill="currentColor"
      />
      <path
        d="M10.2796 7.86C11.8978 7.86 13.2096 6.54819 13.2096 4.93C13.2096 3.31181 11.8978 2 10.2796 2C8.66141 2 7.34961 3.31181 7.34961 4.93C7.34961 6.54819 8.66141 7.86 10.2796 7.86Z"
        fill="currentColor"
      />
      <path
        d="M16.94 9.02844C18.2876 9.02844 19.38 7.93601 19.38 6.58844C19.38 5.24086 18.2876 4.14844 16.94 4.14844C15.5924 4.14844 14.5 5.24086 14.5 6.58844C14.5 7.93601 15.5924 9.02844 16.94 9.02844Z"
        fill="currentColor"
      />
      <path
        d="M20.5496 12.9313C21.6266 12.9313 22.4996 12.0582 22.4996 10.9812C22.4996 9.90429 21.6266 9.03125 20.5496 9.03125C19.4727 9.03125 18.5996 9.90429 18.5996 10.9812C18.5996 12.0582 19.4727 12.9313 20.5496 12.9313Z"
        fill="currentColor"
      />
      <path
        d="M3.94 10.9816C5.28757 10.9816 6.38 9.88914 6.38 8.54156C6.38 7.19399 5.28757 6.10156 3.94 6.10156C2.59243 6.10156 1.5 7.19399 1.5 8.54156C1.5 9.88914 2.59243 10.9816 3.94 10.9816Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default function App() {
  const [selectedSimulador, setSelectedSimulador] = React.useState("");
  const [selectedModel, setSelectedModel] = React.useState("");
  const [selectedForm, setSelectedForm] = React.useState("");



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
      <main className="container mx-auto max-w-7xl lg:pt-16 pt-8 px-6 flex-grow">

        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <Card className="w-full ">
            <CardBody>
              <div className=" grid lg:grid-cols-2 grid-cols-1 gap-4 ">
                <div className="flex flex-col gap-5 lg:border-r border-default-200 p-4">
                  <h1>Payment details</h1>
                  <Autocomplete
                    className="max-w-xs"
                    label="Select a Simulador"
                    placeholder="Search for a Simulador"
                    startContent={<PetIcon className="text-xl" />}
                    variant="bordered"
                  >
                    {Object.keys(simuladorData).map((item) => (
                      <AutocompleteItem
                        onPress={() => {
                          setSelectedSimulador(item);
                          setSelectedModel(""); // Limpa o estado selectedModel
                          setSelectedForm(""); // Limpa o estado selectedForm
                        }}
                        key={item}
                        value={item}
                      >
                        {item}
                      </AutocompleteItem>
                    ))}
                  </Autocomplete>

                  <Autocomplete
                    className="max-w-xs"
                    label="Select a model"
                    placeholder="Search for a model"
                    startContent={<PetIcon className="text-xl" />}
                    variant="bordered"
                  >
                    {simuladorData[selectedSimulador]?.map((item) => (
                      <AutocompleteItem
                        onPress={() => setSelectedModel(item.tipo)}
                        key={item.tipo} value={item.tipo}>
                        {item.tipo}
                      </AutocompleteItem>
                    ))}

                  </Autocomplete>

                  <Autocomplete
                    className="max-w-xs"
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
                          <AutocompleteItem
                            onPress={() => setSelectedForm(item)}

                            key={item} value={item}>
                            {item}
                          </AutocompleteItem>
                        ))
                    }

                  </Autocomplete>
                  {(selectedForm && selectedForm.trim() !== "" &&
                    (selectedModel === "Custos Hidroviários - Alta restrição" ||
                      selectedModel === "Custos Hidroviários - Média restrição" ||
                      selectedModel === "Custos Hidroviários - Baixa restrição" ||
                      selectedModel === "Custos Hidroviários - Cabotagem" ||
                      selectedModel === "Custos Ferroviários - com tarifas acessórias" ||
                      selectedModel === "Custos Ferroviários - sem tarifas acessórias")) ? (
                    <Input
                      labelPlacement="outside"
                      className="max-w-xs"
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
                        className="max-w-xs"
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
                        className="max-w-xs"
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
                        className="max-w-xs"
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
                        className="max-w-xs"
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
                        className="max-w-xs"
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
                        className="max-w-xs"
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
                        className="max-w-xs"
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
                        className="max-w-xs"
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
                        className="max-w-xs"
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
                  <h1>Single</h1>
                  <div className="flex gap-2 ">
                    <h1 className="text-sm text-default-400">$8.00</h1>
                    <Divider orientation="vertical" />
                    <h1 className="text-sm text-default-400">Unlimited access</h1>
                    <Divider orientation="vertical" />
                    <h1 className="text-sm text-default-400">Month</h1>
                  </div>
                  <Card className="bg-default-100 border border-default-200 shadow-inner">
                    <CardBody>
                      <div className="flex flex-col gap-3">
                        <Input
                          label="Promo Code"
                          labelPlacement="outside"
                          type="text"
                        />
                        <Divider />
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
                    <h1>Due today</h1>
                    <div className="text-right">
                      <h1 className="text-default-500">$8.00</h1>+ applicable tax
                    </div>
                  </div>
                </div>
              </div>
              <Divider className="my-4" />
            </CardBody>
            <CardFooter>
              <div className="flex justify-between w-full">
                <Button>Clear</Button>
                <Button color="primary">Pay</Button>
              </div>
            </CardFooter>
          </Card>
        </section>
      </main>
    </NextUIProvider >
  );
}