/**
 * Helper functions for interacting with the file system access API.
 */

/* Only allow .big files. */
const pickerOpts = {
  types: [
    {
      accept: {
        'application/octet-stream': ['.big'],
      },
    },
  ],
}

/**
 * Get file handle object.
 *
 * @param storedFileHandle A stored FileHandle used for startIn dir.
 * @returns
 */
export const getFileHandle = async (
  storedFileHandle: FileSystemFileHandle
): Promise<FileSystemFileHandle> =>
  self
    .showOpenFilePicker(
      storedFileHandle
        ? { ...pickerOpts, startIn: storedFileHandle }
        : pickerOpts
    )
    .then((handles: [FileSystemFileHandle]) => {
      return handles[0]
    })

/**
 * Opens a Filepicker and returns the content of the file.
 *
 * @returns {string} File content.
 */
export const readFile = async (
  fileHandle: FileSystemFileHandle
): Promise<string> => {
  const file = await fileHandle.getFile()
  const contents: string = await file.text()
  return contents
}

/**
 * Writes file of selected file handle to disk.
 *
 * @param fileHandle
 * @param contents
 */
export const writeFile = async (
  fileHandle: FileSystemFileHandle,
  contents: string
) => {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable()
  // Write the contents of the file to the stream.
  await writable.write(contents)
  // Close the file and write the contents to disk.
  await writable.close()
}

/**
 * Check if File System Access API is supported.
 *
 * @returns {boolean } true | false
 */
export const fileApiSupport = (): boolean => {
  return 'showOpenFilePicker' in window
}
