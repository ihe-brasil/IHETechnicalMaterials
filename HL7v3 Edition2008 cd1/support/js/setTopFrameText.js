function setHeadingTextFromFileName(href) {
	setHeadingTextFromFileName(href, "");
}
function setHeadingTextFromFileName(href, optionalSubdivnName) {
	var lastSlash = href.lastIndexOf('/');
	var fileName = href.substr(lastSlash);
	var lastPeriod = href.lastIndexOf('.');
	var fileName = href.substring(lastSlash +1, lastPeriod);
	var domainsHash = getDomainsHash();  
	var uppercaseFileName = fileName.toUpperCase();
	var baseFileName = uppercaseFileName.substring(0,4);
	var artifactID = uppercaseFileName.substring(5,7);
	var underscore = uppercaseFileName.substring(7,8);
	var artifactType = fileName.substring(8,10);
	if(hashKeyExists(baseFileName, domainsHash)){
	      var domainLabel = getHashValue(baseFileName,domainsHash);
		if (fileName.length == 4){
			setHeadingText(domainLabel);
		}
		else if (fileName.length > 4){
			var artifactIDHash = getArtifactIDHash();
			var artiFactTypeHash = getArtifactTypeHash();
			
			if (optionalSubdivnName != null){
				var baseClassName = getCamelCase(fileName);
				setHeadingText(domainLabel + "<br>" + optionalSubdivnName);
			}			
			else if((underscore != '_') | (artifactID != 'DO') ){
				var baseClassName = getCamelCase(fileName);
				setHeadingText(domainLabel + "<br>" + baseClassName);
			}else{
				var artifactIDLabel = getHashValue(artifactID,artifactIDHash);
				var artifactTypeLabel =getHashValue(artifactType,artifactTypeHash);
				setHeadingText(domainLabel + "<br>" + artifactTypeLabel);
			}
		}
	}
	else{
			var foundationsHash = getFoundationsHash();
			var foundationLabel=getHashValue(uppercaseFileName,foundationsHash);
			setHeadingText(foundationLabel);
		}
	
}
function getDomainsHash(){
	var domains = [      
		{key: "UVAB",  value: 'Domain: Account and Billing'},                    
		{key: "UVAI",  value: 'Domain: Message Control Act Infrastructure'},                    
		{key: "UVBB",  value: 'Domain: Blood Bank'},
		{key: "UVCD",  value: 'Domain: Structured Documents'}, 
		{key: "UVCG",  value: 'Domain: Clinical Genomics'}, 
		{key: "UVCI",  value: 'Domain: Transmission Infrastructure'},                    
		{key: "UVCR",  value: 'Domain: Claims &amp; Reimbursement'},                    
		{key: "UVCS",  value: 'Domain: Clinical Statement'},
		{key: "UVCT",  value: 'Domain: Common Message Element Types'},                    
		{key: "UVDI",  value: 'Domain: Diagnostic Imaging'},
		{key: "UVDS",  value: 'Domain: Decision Support'},                    
		{key: "UVII",  value: 'Domain: Imaging Integration'}, 
		{key: "UVIZ",  value: 'Domain: Immunization'}, 
		{key: "UVLB",  value: 'Domain: Laboratory'},     
		{key: "UVME",  value: 'Domain: Medication'},  
		{key: "UVMI",  value: 'Domain: Master File / Registry Infrastructure'},                    
		{key: "UVMM",  value: 'Domain: Materials Management'},
		{key: "UVMR",  value: 'Domain: Medical Records'},                    
		{key: "UVMT",  value: 'Domain: Shared  Messages'},                    
		{key: "UVOB",  value: 'Domain: Observations'},
		{key: "UVOR",  value: 'Domain: Orders'},
		{key: "UVPA",  value: 'Domain: Patient Administration'},                    
		{key: "UVPC",  value: 'Domain: Care Provision'},                    
		{key: "UVPM",  value: 'Domain: Personnel Management'},                    
		{key: "UVQI",  value: 'Domain: Query Infrastructure'},                    
		{key: "UVRP",  value: 'Domain: Regulated Product Submissions'},
		{key: "UVRR",  value: 'Domain: Public Health Reporting'},
		{key: "UVRT",  value: 'Domain: Regulated Studies'},
		{key: "UVRX",  value: 'Domain: Pharmacy'},
		{key: "UVSC",  value: 'Domain: Scheduling'},                    
		{key: "UVSP",  value: 'Domain: Specimen'},                    
		{key: "UVTD",  value: 'Domain: Therapeutic Devices'},
		{key: "GBLB",  value: 'Domain: UK Laboratory'},              
		{key: "GBCT",  value: 'Domain: UK Common Message Element Types'}               
		]
	return domains;
}
function getArtifactIDHash(){
	var artifactIDHash = [ 
		{key: "DO",  value: 'Domain'},
		{key: "SB",  value: 'Message Definitions'},
		{key: "QU",  value: 'Query Based'},
		{key: "MF",  value: 'Master Files'}
		]
	return artifactIDHash;
}
function getArtifactTypeHash(){
	var artifactTypeHash = [ 
		{key: "CT",  value: 'CMETs'},
		{key: "CM",  value: 'Refined Message Information Models / Hierarchical Message Descriptions'},
		{key: "DM",  value: 'Domain Message Information Model'},
		{key: "ST",  value: 'Story Boards'},
		{key: "AR",  value: 'Application Roles'},
		{key: "HD",  value: 'Hierarchical Message Descriptions'},
		{key: "IN",  value: 'Interactions'},
		{key: "XX",  value: 'Interaction Indicies'},
		{key: "TE",  value: 'Trigger Events'},
		{key: "RM",  value: 'Refined Message Information Models'}
		]
	return artifactTypeHash;
}

function getFoundationsHash(){
	var foundationsHash = [
		{key: "VOCABULARY",  value: 'Vocabulary'},                    
		{key: "BACKBONE",  value: 'Package Notes to Readers'},                   
		{key: "V3GUIDE",  value: 'HL7 V3 Guide'},                    
		{key: "RIM",  value: 'Reference Information Model'},                    
		{key: "CONFORMANCE",  value: 'Refinement, Constraint and Localization'},                    
		{key: "GLOSSARY",  value: 'Glossary'},                    
		{key: "DATATYPES",  value: 'Data Types: Abstract Specification'},                    
		{key: "DATATYPES_R2",  value: 'Data Types: Abstract Specification, Release 2'}, 
		{key: "V3MODELCOREPRINCIPLES", value: 'Core Principles and Properties of V3 Models'},
		{key: "DATATYPES-ITS-XML",  value: 'ITS: XML Data Types, Release 1'}, 
		{key: "DATATYPES-ITS-XML_r2",  value: 'ITS: XML Data Types, Release 2'},
		{key: "MESSAGING-ITS-XML",  value: 'ITS: XML Structures'},    
		{key: "MESSAGING-ITS-XML1DOT1",  value: 'ITS: XML for V3 Structures 1.1'},    
		{key: "NEWITSSPEC",  value: 'ITS: XML Implementation Technology Specification, Release 2'},    
		{key: "NEWITSGUIDE",  value: 'ITS: XML Implementation Technology Specification R2 GUIDE, Release 1'},    
		{key: "ISODATATYPES",  value: 'ITS: ISO DATA TYPES, Release 1'},    
		{key: "TRANSPORT-ABSTRACT",  value: 'Abstract Transport Specification'},        
		{key: "TRANSPORT-INTRO",  value: 'Transport Specifications'},        
		{key: "TRANSPORT-EBXML", value: 'Transport Specifications: ebXML'},
		{key: "TRANSPORT-MLLP", value: 'Transport Specifications: MLLP'},
		{key: "TRANSPORT-WSPROFILES", value: 'Transport Specifications: SOAP/WSDL Profiles'},
		{key: "TRANSPORT-RMMI", value: 'Transport Specifications: ISO 9660 Removable Media'},
		{key: "DATATYPES-ITS-UML",  value: 'ITS: UML Data Types'},
		{key: "SECURITY", value: 'Role Based Access Control (RBAC) Role Engineering'},
		{key: "HDF", value: 'HL7 Development Framework'},
		{key: "HDFAPPENDIX", value: 'HDF Appendix'},
		{key: "HDFIMPLPROFILING", value: 'HDF Implementation Profiling'},
		{key: "HDFPROJECTINITIATION", value: 'HDF Project Initiation'},
		{key: "HDFREQUIREMENTSDOC", value: 'HDF Requirements Documentation'},
		{key: "HDFSPECAPPROVAL", value: 'HDF Specification Approval'},
		{key: "HDFSPECDOCUMENTATION", value: 'HDF Specifications Documentation'},
		{key: "HDFSPECMODELING", value: 'HDF Specification Modeling'},
		{key: "HDFSPECPUBLICATION", value: 'HDF Specification Publication'},	
		{key: "TERMINFO", value: 'Using SNOMED CT'},
		{key: "RLUS", value: 'Resource Location and Updating Service'},
		{key: "EIS", value: 'Entity Identification Service'},
		{key: "DSS", value: 'Decision Support Service'},
		{key: "SOA4HL7", value: 'SOA4HL7 Methodology'},
		{key: "PFG", value: 'Version 3 Publishing Facilitators Guide'},
		{key: "SUBS", value: 'Substantive Change'},
		{key: "CDA",  value: 'Clinical Document Architecture'},
		{key: "CTS",  value: 'Common Terminology Services'},
		{key: "TEMPLATES", value: 'Templates Project'},
		{key: "CONSTRAINTS", value: 'Constraints Project'},
		{key: "GELLO",  value: 'GELLO: Common Expression Language'},
		{key: "SCHEMAS",  value: 'V3 Schemas'},
		{key: "EXAMPLES",  value: 'V3 Examples from All Domains Where Available'}
		]
return foundationsHash;
}

function hashKeyExists(key, hashTable){
    	 for (var n in hashTable) {
        	 if (hashTable[n].key == key)
            	 return true;
    	}
    	return false;
}

function getHashValue(key, hashTable){
    	 for (var n in hashTable) {
        	 if (hashTable[n].key == key)
            	 return hashTable[n].value;
    	}
	return '';
}
function setHeadingText(text) {
	top.heading.document.getElementById('headingText').innerHTML=text;
}
function find(what) {
    for (var i=0;i<parent.frames.length;i++) {
         if (parent.frames[i].name == what)
             return true;
    }
    return false;
}
function getCamelCase(fileName){
				var camelCase = fileName.substr(7,fileName.length);
				var txt;
				for (i =0;i<=camelCase.length;i++){
					if (i ==0){
						txt = camelCase.substr(i,1);
					}else{
						var c = camelCase.substr(i,1);
						if(c=='A'||c=='B'||c=='C'||c=='D'||c=='E'||c=='F'||c=='G'||c=='H'||c=='I'||c=='J'||c=='K'||c=='L'||c=='M'||c=='N'||c=='O'||c=='P'||c=='Q'||c=='R'||c=='S'||c=='T'||c=='U'||c=='V'||c=='W'||c=='X'||c=='Y'||c=='Z'){
							txt =  txt + " " + c;
						}
						else{
							txt =  txt + c;
						}
						
					}

				}
				return txt;
}