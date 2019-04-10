
### Test #6002 (Br_PM_PDQv3_Continuation_6002)

Verify that PDQ Consumer can submit a Patient Demographics Query HL7V3 Continuation transaction. In these test, you will use the Patient Manager as a Patient Demographics Supplier (PDS) Simulator to respond to your PDQ Query.

**References:** ITI TF-2b 3.47.4.3 and ITI TF-2x O.1.3

**Actor:** Patient Demographics Consumer

**Dependencies:** None

**Resources:** [Gazelle Patient Manager](https://gazelle.ihe.net/PatientManager/hl7v3/pdq/supplier.seam)

**Test procedure**   

1. Access the Patient Manager tool: [http://gazelle.ihe.net/PatientManager](http://gazelle.ihe.net/PatientManager).  

2. Go to menu PDQ-->Patient Demographic Supplier (PDS). Next, select HL7v3 Configuration.

3. The tool will display the configuration details you will need to query the PDS Simulator. Ensure the status of the Simulator is "Running".

![](./media/image4-6.png)

4. Configure your System Under Test (SUT) to perform query based on the PDS simulator endpoint (See Step #3). Pay attention to the ITI TF-2b Table 3.47.4.3.2.3-1: Wrappers and Constraints.

5. Your message should include a LivingSubjectName with given equal to “Jo” as part of the ParameterList class. Also, configure your message to retrieve 10 patients at maximum (“InitialQuantity” with value=10). In the sequence, send a new transaction to retreive next 10 records, and another transaction to "cancel" the query, See examples on this [SOAPUI project](https://github.com/ihebrasil/PROADI-SUS-HAOC/blob/master/SOAPUI%20Projects/Gazelle-Patient-Manager-examples-soapui-project.xml).

6. You can use menu HL7 messages to find the query & response captured by the tool. Similar to what was done in the previous test (Test #6001).

7. Take a screenshot of your application or your database as a proof of receipt of the query response. The screenshot demonstrates that you have successfully processed the received query response(s).

8. Retrieve the permanent link to the transaction instance from Patient Manager, and paste that as evidence for this test. Generated a ZIP file including all evidences you have collected. Post the generated zip file and screenshot to Gazelle Action “return log file”.  

9. Change the status of the pre-connectathon test to "Verified by vendor".