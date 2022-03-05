# music-player-actions

## 功能
用于重排音乐文件的顺序，并生成歌单的 excel 文件。<br/>
主要用于使不同语言的歌能按照歌名首字母分布在不同的区间，并且同个区间内不同语言的歌能够随机分布。

## 效果
使用前：<br/>
![image](https://user-images.githubusercontent.com/66453583/156391240-c8c8ce15-2953-4ea0-9ab8-7a2e20e51454.png)<br/>
使用后：
![image](https://user-images.githubusercontent.com/66453583/156391529-c3d90ac6-bdfe-477f-8147-7afcf5b2746a.png)<br/>
![image](https://user-images.githubusercontent.com/66453583/156394291-e93f8a13-8dfd-4e45-a8c6-71e0e722bde3.png)

## 使用方法
- `npm start`: 重排文件，并且使用上次留下的 excel 文件作为缓存。效率高但是可能不准确。
- `npm start -- force`：重排文件，并且重新读取所有文件的元数据生成新的 excel 文件。