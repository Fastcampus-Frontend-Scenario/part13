import azure from 'azure-storage'
import { StorageProvider } from './index.js'

export interface AzureBlobStorageOptions {
  containerName: string
  connectionString: string
}

export function createAzureBlobStorage({
  containerName,
  connectionString,
}: AzureBlobStorageOptions): StorageProvider {
  const blobService = azure.createBlobService(connectionString)
  const emptyCb = () => null

  return {
    exists: (artifactPath, cb) => {
      blobService.doesBlobExist(
        containerName,
        artifactPath,
        {},
        (error, result) => cb(error, result.exists),
      )
    },
    createReadStream(artifactPath) {
      return blobService.createReadStream(
        containerName,
        artifactPath,
        emptyCb,
      ) as NodeJS.ReadStream
    },
    createWriteStream(artifactPath) {
      return blobService.createWriteStreamToBlockBlob(
        containerName,
        artifactPath,
        {},
      )
    },
  }
}
