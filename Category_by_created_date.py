import os
import datetime
import time
import io
import shutil


# root path of saved html
save_path = ""
# path of chrome download folder
download_path = ""
lst = os.listdir(download_path)

# keep the files start wiht 'chrome_'
chrome_list = list(filter(lambda x: x.startswith('Chrome_'),lst))

# join the path to the file names to make an absolute path
full_path_list = [os.path.join(download_path,x) for x in chrome_list]

print([os.path.basename(x) for x in full_path_list])


for p in full_path_list:
    # create date created folder in target path
    t = os.path.getatime(p)

    date_of_file = time.strftime('%Y%m%d',time.localtime(t))
    date_folder = os.path.join(save_path, date_of_file)

    if not os.path.exists(date_folder):
        os.makedirs(date_folder)

    # we have a folder. Then should move the files into created folder
    shutil.move(p,os.path.join(date_folder, os.path.basename(p)))


# create URL folder in sub-folder
