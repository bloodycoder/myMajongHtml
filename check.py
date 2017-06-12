# coding: utf-8
# 递归搜索文件
import os
from os.path import join, getsize

exists = 0

def search(path):
    for file in os.listdir(path):
        # 比较文件名
        if('.' in file):
            fileSplit = file.split('.')[-1]
            if(fileSplit!='js' and fileSplit!='json'):
                continue
        if file.find(s) != -1:
            print path + file
        else:
            file = join(path,file)
            if os.path.isfile(file):
                # 文件小于100MB开始比对
                if getsize(file) < 100000000:
                    # 比较文件内容
                    f = open(file,'rb')
                    content = f.read()
                    f.close()
                    if content.find(s) != -1:
                        global exists
                        exists = 1
                        print file
            else:
                search(file)

def search_name(path):
    for file in os.listdir(path):
        file = join(path,file)
        if file.find(s) != -1:
            print file
        if os.path.isdir(file):
            search_name(file)


if __name__ == '__main__':
    s = raw_input('input the text you wanna search')
    search('.')
    while(s!='q'):
        search('.')
        if not exists:
            print 'None'
        s = raw_input('input the text you wanna search')
    raw_input('Done')
    #search_name('.')
