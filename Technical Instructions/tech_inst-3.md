## Test #5001 (Br_XDS-Src_5001)

Submit one document via XDS.b

Verify that the XDS.b Document Source can submit a single document via Provide and Register Document Set-b transaction. 

**References:** ITI TF-2 3.41

**Actor:** Document Source

**Dependencies:** None

**Resources:** NIST XDS ToolKit

In these test cases, the NIST XDS Tookit acts as a simulator for an XDS.b Document Repository and Document Registry.  This enables an XDS.b Document Source to submit documents to Toolkits, and an XDS.b Document Consumer to query for and retrieve documents.

You must install Toolkit locally before performing these tests. The XDS Toolkit download and instructions are found here:  https://github.com/usnistgov/iheos-toolkit2/wiki/Toolkit

**Test Procedure**  

1. Access NIST XDS Toolkit and enter with the admin password (default: "easy")

![](./media/image3-01.png)

2. Create a test session or select a proper one. Check if the "default" environment codes is being used.  

![](./media/image3-02.png)

3. Go to the “Simulators” menu option. Select "Document Registry" for actor type. Enter with a shortname for your simulator, and click on "Create Actor Simulator" bottom. 

![](./media/image3-03.png)

4. Double click on the new Register simulator and take note of the register endpoint.

![](./media/image3-04.png)

![](./media/image3-05.png)

5. Repeat Step #3 for creating a "Document Repository" simulator. Give it a different shortname.

6. Double click on the new Repository simulator, configure the Registry endpoint (that you have taken note on Step #4) and click on "Save".

![](./media/image3-06.png)

![](./media/image3-07.png)

7. Go to the “Manage Patient IDs” menu option. Select one patient ID, select your register simulator and click on “Run” bottom to send a patient feed transaction to your register simulator  

![](./media/image3-08.png)

8. Go to "Simulators" menu option. Open the Repository simulator you created in the Step #5 and take note of the Repository endpoints. 

9. Use your System Under Test (actor: document source) to submit a Submission Set containing a single Document using the Provide and Register Document Set-b transaction against the Pnr endpoint (or Pnr TLS endpoint).   

![](./media/image3-09.png)

10. Go to the “Simulators” menu option. Open the Repository simulator and click on the “log” action  

![](./media/image3-10.png)

11. Select the “message” you have just generated. Take a screenshot and click on the “Download message” option.

![](./media/image3-11.png)  

12. Post the generated zip file and screenshot to Gazelle Action “return log file”.  

13. Change the status of the pre-connectathon test to "Verified by vendor".
