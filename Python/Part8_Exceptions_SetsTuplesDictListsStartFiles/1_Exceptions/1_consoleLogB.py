import logging


"To Do: Predict, then Run, and then Investigate"

''' To configure and log to a file (myFilelog.log).
The log level can be set to DEBUG which will log the all (Critical , Error, Warning, Info and Debug) 
or set to ERROR to log only CRITICAL and ERROR. 
While if configured to CRITICAL, only critical errors will be logged'''

# # logging.basicConfig(filename = "myFilelog.log", level = logging.ERROR)  # from error and above will be logged to file
# logging.basicConfig(filename = "Python/Part8_Exceptions_SetsTuplesDictListsStartFiles/1_Exceptions/file.log", level = logging.DEBUG) # to see all error logs
# #different logging methods and severity
# logging.critical("Critical")
# logging.error("Error")
# logging.warning("Warning")
# logging.info("Info")
# logging.debug("Debug")


'''
The default log messages is warning, therefore, root logger will log all messages which are warnings and above. 
Resulting in displaying only the first three messages  and not info and debug which are below warning. 

'''  

"To Do: Task 1: Modify"
# Modify: 
# 1. Log the error to the Exceptions folder in a file called myFilelog.log 
# logging.basicConfig(filename = "Python/Part8_Exceptions_SetsTuplesDictListsStartFiles/1_Exceptions/myFilelog.log", level = logging.DEBUG) # to see all error logs

# logging.critical("Critical")
# logging.error("Error")
# logging.warning("Warning")
# logging.info("Info")
# logging.debug("Debug")

# Method 2
# logging.basicConfig(filename = "Python/Part8_Exceptions_SetsTuplesDictListsStartFiles/1_Exceptions/myFilelog.log", ) # to see all error logs

# logging.critical("Critical")
# logging.error("Error")
# logging.warning("Warning")
# logging.info("Info")
# logging.debug("Debug")

# Method 3
logging.basicConfig(filename = "Python/Part8_Exceptions_SetsTuplesDictListsStartFiles/1_Exceptions/myFilelog.log", level = logging.INFO) # to see all error logs

logging.critical("Critical")
logging.error("Error")
logging.warning("Warning")
logging.info("Info")
logging.debug("Debug")


