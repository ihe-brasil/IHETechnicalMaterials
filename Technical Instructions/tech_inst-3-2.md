
## Test #5002 (Br_XDS-Src_5002)

Submit one document via XDS.b over TLS

Verify that the XDS.b Document Source can submit a single document via Provide and Register Document Set-b transaction over TLS. 

**References:** ITI TF-2 3.41

**Actor:** Document Source

**Resources:** NIST XDS ToolKit

In these test cases, the NIST XDS Tookit acts as a simulator for an XDS.b Document Repository and Document Registry.  This enables an XDS.b Document Source to submit documents to Toolkits, and an XDS.b Document Consumer to query for and retrieve documents.

You must install Toolkit locally before performing these tests.   The XDS Toolkit download and instructions are found here:  https://github.com/usnistgov/iheos-toolkit2/wiki/Toolkit

**Test Procedure**

Repeat all steps of test #5001. However, perform Step #9 over TLS.