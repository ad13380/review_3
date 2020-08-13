digital audio workstation plugins
filters applied to music tracks
band pass filter

music - array frequencies integers
band pass - only vertain range min and max value 
[40,100,1000,1005], 40, 1000 ----> [40,100,1000,1000]
may be a float, or contain strange values  (raise an error)
default range: 40, 1000

INPUT     OUTPUT
[39]      [40]
[42]      [42]
[40]      [40]
[1001]    [1000]
[1000]    [1000]
[999]     [999]
[39, 20, 1]  [40, 40, 40]
[39, 40, 41, 1] [40, 40, 41, 40]
[1001, 1100, 1009] [1000, 1000, 1000]
[1001, 999, 1000, 800] [1000, 999, 1000, 800]
[1001, 999, 40, 39] [1000, 999, 40, 40]

['40']    An error