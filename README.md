# Materiais técnicos sobre ferramentas de teste e desenvolvimento de transações IHE ITI

-----
### IHE ITI Technical Framework


Webinar: IHE ITI Framework Introduction | https://youtu.be/609bBW9RmCg 

-----

### Perfil IHE XDS.b Cross-Enterprise Document Sharing  

Webinar: Document Sharing overview | https://www.youtube.com/watch?v=VG1oF5FEijY 

Ferramenta de testes: [NIST XDS ToolKit](https://github.com/usnistgov/iheos-toolkit2)
Considerações sobre o [processo de instalação](Technical%20Instructions/tech_inst-2.md) 
[Schemas & WSDLs](./IHE%20schemas%20&%20wsdls) e [exemplos de mensagens XDS.b](./IHE%20messages%20examples/XDS.b)

[Projeto SOAPUI](./SOAPUI%20Projects/NIST%20XDS-Toolkit-Examples-soapui-project.xml) com exemplos de mensagens XDS.b baseados na utilização da ferramenta NIST XDS ToolKit 

Leituras sugeridas:  
- [IHE ITI Vol 1](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=81) - Cross-enterprise Document Sharing
- [IHE ITI Vol 2a ITI-18](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2a.pdf#page=91) - Registry Stored Query
- [IHE ITI Vol 2b ITI-41](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=153) - Provide and Register Document Set-b
- [IHE ITI Vol 2b ITI-42](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=164) - Register Document Set-b
- [IHE ITI Vol 2b ITI-43](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=175) - Retrive Document Set
- [IHE ITI Vol 3](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol3.pdf#page=4) - Metadata used in Document Sharing profiles

Forum técnico internacional de [desenvolvedores XDS.b](https://groups.google.com/forum/#!forum/ihe-xds-implementors)

Exemplo de Conector java desenvolvido pelo [laboratório Bridge/USFC](https://bridge.ufsc.br/)
- https://github.com/laboratoriobridge/mpi-client
- https://github.com/laboratoriobridge/res-api

-----

### Perfis IHE Patient Demographics Query (PDQv3) e Patient Identifier Cross-Referencing (PIXv3)

Webinar: Introduction of IHE PIX/PDQv3 Profiles | https://youtu.be/tO6Fd6oJ_3E 

Ferramenta de testes: [Gazelle Patient Manager](https://gazelle.ihe.net/PatientManager/home.seam)  

[Schemas & WSDLs](./IHE%20schemas%20&%20wsdls) e exemplos de mensagens [PDQv3](./IHE%20messages%20examples/PDQV3) e [PIXv3](./IHE%20messages%20examples/PIXV3) 

[Projeto SOAPUI](./SOAPUI%20Projects/Gazelle-Patient-Manager-examples-soapui-project.xml) com exemplos de PIXv/PDQv3 baseados na utilização da ferramenta 

[Projeto SOAPUI](./SOAPUI%20Projects/NIST-PIXPDQ-Examples-soapui-project.xml) com exemplos de mensagens PIXv3 e PDQv3 baseado na utilização da ferramenta [NIST PIX PDQ Tool](https://pixpdqtests.nist.gov/pixpdqtool/) 

Ilustração sobre wrappers HL7 v3 para mensagem [ITI-44 Patient Identity Feed "Add"](Technical%20Instructions/media/image23.png).

Referências:

- [IHE ITI Vol 1](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol1.pdf#page=231) - Patient Identifier Cross-referencing HL&v3
- [IHE ITI Vol 1](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol1.pdf#page=236) - Patient Demographics Query HL7v3
- [IHE ITI Vol2b ITI-44](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=192) - Patient Identity Feed HL7v3
- [IHE ITI Vol2b ITI-45](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=217) - PIXv3 Query
- [IHE ITI Vol2b ITI-47](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=245) - Patient Demographics Query HL7v3
- [IHE ITI Vol2x](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2x.pdf#page=59) - HL7 v3 Transmission and Trigger Event Control Act
Wrappers

Forum técnico internacional de desenvolvedores [PIXv3/PDQv3](https://groups.google.com/forum/#!forum/ihe_pix_pdq_testing)

Exemplo de Conector java desenvolvido pelo [laboratório Bridge/USFC](https://bridge.ufsc.br/)
- https://github.com/laboratoriobridge/soap-api
- https://github.com/laboratoriobridge/res-api

-----
### Perfil Audit Trail and Node Authentication (ATNA)


Para a maioria das transações IHE existem mensagens de auditoria definidas. Por exemplo, para a transação ITI-18 "Registry Stored Query" são definidas duas mensagens de auditoria: uma relacionada com o envio da consulta pelo "Document Consumer" e outra relacionada com o recebimento da consulta pelo "Document Registry". Estas mensagem de auditoria são geradas e enviadas para o Audit Record Repository (ARR).

Ou seja, ainda pensando na transação ITI-18 "Registry Stored Query", se o seu sistema irá submeter uma consulta ele assume o papel do ator "Document Consumer". Neste caso, após submeter a consulta é necessário enviar uma mensagem "Document Consumer audit message" para o ARR. Por outro lado, ao processar a consulta, o "Document Registry" precisa enviar uma mensagem "Document Registry audit message" para o ARR. Veja o modelo de informação destas duas mensagens abaixo. 

Na pasta [ATNA example](https://github.com/ihebrasil/PROADI-SUS-HAOC/tree/master/ATNA%20example) você encontrará [exemplos de mensagens de auditoria](https://github.com/ihebrasil/PROADI-SUS-HAOC/tree/master/ATNA%20example/IHE%20Transactions%20Audit%20messages), o [XML Schema](https://github.com/ihebrasil/PROADI-SUS-HAOC/tree/master/ATNA%20example/IHE%20Transactions%20Audit%20messages/dicom_ihe_ps3.15_a.5.1_2017c.xsd) e uma [prova de conceito](https://github.com/ihebrasil/PROADI-SUS-HAOC/tree/master/ATNA%20example/Syslog%20POC) que utiliza o aplicativo [Packet Sender](https://packetsender.com/) para enviar mensagens de auditoria da transação ITI-41 para o simulador de Audit Record Repository (ARR) disponível no [Gazelle Security Suite](https://gazelle.ihe.net/gss/). 

Modelos de informação de mensagens de auditoria por Transação/Ator:

- Transãção XDS.b ITI-18 "Registry Stored Query"

  - Document Consumer audit message. Referência: [IHE ITI vol2a Section 3.18.5.1.1](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2a.pdf#page=128)
  - Document Registry audit message. Referência: [IHE ITI vol2a Section 3.18.5.1.2](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2a.pdf#page=130)

- Transãção XDS.b ITI-41 "Provide and Register Document Set-b"
    
  - Document Source audit Message. Referência: [IHE  ITI vol 2b Section 3.41.5.1.1](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=160) 
  - Document Repository audit message. Referência: [IHE ITI vol 2b Section 3.41.5.1.2](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=162) 
   
- Transação XDS.b ITI-42 "Register Document Set-b"

  - Document Repository audit message. Referência: [IHE ITI vol 2b Section 3.42.5.1.1](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=172)
  - Document Registry audit message. Referência: [IHE ITI vol 2b Section 3.42.5.1.2](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=173)

- Transãção XDS.b ITI-43 "Retrieve Document Set"

  - Document Consumer audit message. Referência: [IHE  ITI vol 2b Section 3.43.6.1.1](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=189) 
  - Document Repository audit message. Referência: [IHE ITI vol 2b Section 3.43.6.1.2](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=190) 

- Transação PIXv3 ITI-44 "Patient Identity Feed HL7 V3"

  - Patient Identity Source audit message. Referência: [IHE ITI vol 2b Section 3.44.5.1.1](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=214) 
  -  Patient Identifier Cross-reference Manager audit message. Referência: [IHE ITI vol 2b Section 3.44.5.1.2](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=215)
 
- Transação PIXv3 ITI-45 "PIXV3 Query"

  - Patient Identifier Cross-reference Consumer audit message. Referência: [IHE ITI vol 2b Section 3.45.5.1.1](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=231) 
  -  Patient Identifier Cross-reference Manager audit message. Referência: [IHE ITI vol 2b Section 3.45.5.1.2](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=233)

- Transação PDQv3 ITI-47 "Patient Demographics Query" HL7 V3

  - Patient Demographics Consumer audit message. Referência: [IHE ITI vol 2b Section 3.45.5.1.1](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=268) 
  -   Patient Demographics Supplier audit message. Referência: [IHE ITI vol 2b Section 3.45.5.1.2](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2b.pdf#page=270)
 

Referências:

- [IHE ITI Vol 1](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol1.pdf#page=68) - Audit Trail and Node Authentication (ATNA) Profile
- [IHE ITI Vol2a ITI-19](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2a.pdf#page=121) - Authenticate Node
- [IHE ITI Vol2a ITI-20](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_TF_Vol2a.pdf#page=138) - Record Audit Event

-----

### Exemplos de testes Pré-Connectathon

   - XDS.b Cross-Enterprise Document Sharing  
   
        - ator: Document Source - testes [#5001 (Br_XDS-Src_5001)](Technical%20Instructions/tech_inst-3.md) e [#5002 (Br_XDS-Src_5002)](Technical%20Instructions/tech_inst-3-2.md)  
        - ator: Document Consumer - teste [#5003 (Br_XDS-Cons_5003)](Technical%20Instructions/tech_inst-3-1.md)  

   - PDQv3 Patient Demographics Query

        - ator: Patient Demographics Consumer - testes [#6001 (Br_PM-PDQv3_Cons_6001)](Technical%20Instructions/tech_inst-4.md) e [#6002 (Br_PM_PDQv3_Continuation_6002)](Technical%20Instructions/tech_inst-4-1.md)

   - PIXv3 Patient Identifier Cross-Referencing 

        - ator: Patient Identity Source - teste [#6003 (Br_PM-PIXv3_Src_6003)](Technical%20Instructions/tech_inst-5.md)

-----

### Outros recursos

Recursos | URL
---------|-----
IHE Internacional | https://www.ihe.net 
IHE Brasil | http://www.ihe.org.br/ 
IHE Technical Frameworks | http://ihe.net/Technical_Frameworks 
[HL7 v3 edition 2008](./HL7v3%20Edition2008%20cd)