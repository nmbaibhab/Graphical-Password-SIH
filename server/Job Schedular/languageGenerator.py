import pymongo
from pymongo import MongoClient
import random  
import string
from datetime import datetime
import os
from dotenv import load_dotenv

class MongoDB(object):

	def __init__(self, dBName=None, collectionName=None):
		load_dotenv()
		self.dbURI = os.getenv('DB_URL')
		self.dBName = dBName
		self.collectionName = collectionName

		self.client = MongoClient(self.dbURI, 27017, maxPoolSize=50)

		self.DB = self.client[self.dBName]
		self.collection = self.DB[self.collectionName]
		print("Successfully connected to the monogodb server !!")

	def FetchData(self):
		"""
		:param : None
		:return: records
		"""

		records = self.collection.find ({})
		return list(records)

	def InsertData(self, data):
		"""
		:param records: Array of Records
		:return: None
		"""

		self.collection.insert_many(data, ordered=True)
		print("Data has been inserted successfully to the Databse !!")

	def UpdateData(self, data):
		"""
		:param records: Array of objects {query, newvalues}
		:param example: data[i]["query"] = { "address": "Valley 345" }, data[i]["newvalues"] = { "$set": { "address": "Canyon 123" } }
		:return: None
		"""
		for item in data:
			self.collection.update_one(item["query"], item["newvalues"])
		print("Database has been updated successfully !!")

	def DropData(self, data):
		"""
		:param records: Array of queries
		:param example: data[i] = { "address": "Mountain 21" }
		:return: None
		"""

		for item in data:
			self.collection.delete_one(iteam)
		print("Records has been deleted successfully from the Databse !!")

def generateId(exitingIds):
	while True:
		x = ''.join(random.choices(string.ascii_letters + string.digits, k=16))
		if x not in exitingIds :
			exitingIds.append(x)
			break
	return x

if __name__ == "__main__":
	mongodb = MongoDB(dBName = 'sih2022', collectionName='grammar')
	now = datetime.now()
	current_time = now.strftime("%H:%M:%S")
	# records = GetMentorRecords()
	records = mongodb.FetchData()
	print(f"{len(records)} records are fetched successfully!!")

	exitingIds = []
	newGrammar = []
	alphabets = []
	if records:
		for data in records:
			if data["previous"]:
				exitingIds.append(data["previous"])
			exitingIds.append(data["current"])
			alphabets.append(data["alphabet"])
			newGrammar.append({
				"query" : {"alphabet" : data["alphabet"]},
				"newvalues" : {
					"$set" : {
						"alphabet" : data["alphabet"],
						"previous" : data["current"],
						"current" : generateId(exitingIds),
						"previoustimestamp" : data["currenttimestamp"],
						"currenttimestamp" : current_time
					}
				}
			})
		print("Records are updated !! Updating the Database ...")
		mongodb.UpdateData(newGrammar)

	else :
		alphabets = list(string.ascii_uppercase + string.digits)
		alphabets.remove("0")
		for data in alphabets:
			newGrammar.append({
				"alphabet" : data,
				"previous" : "",
				"current" : generateId(exitingIds),
				"previoustimestamp" : "",
				"currenttimestamp" : current_time
			})
		print("New records are created !! Updating the Database ...")
		mongodb.InsertData(newGrammar)
	print("Script Finished !!")