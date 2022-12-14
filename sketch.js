let nums = [];
let highlighted = [];
let barHeightScale = 4;
let width = 800;
let height = 500;

let sort;
let resetButton;
let lengthSlider;
let frameRateSlider;

let bubbleSortButton;
let quickSortButton;

//for quick sort
let sortQueue = [];
//for bubble sort
let idx = 0;
let jx = 0;

let sortMode;

function setup() {
    canvas = createCanvas(width, height);
    nums = genArray(100, 0, 100);

    lengthSlider = createSlider(10, 1000, 100, 1);
    lengthSlider.input(() => {
        reset();
    })

    sort = createButton("Sort");
    sort.mousePressed(() => {
        quickSort(nums, 0, length.value() - 1);
    });

    resetButton = createButton("Reset");
    resetButton.mousePressed(() => {
        reset();
    });

    frameRateSlider = createSlider(1, 120, 5, 1);
    frameRateSlider.input(() => {
        setFrameRate(frameRateSlider.value());
    });

    bubbleSortButton = createButton("Bubble Sort");
    bubbleSortButton.mousePressed(() => {
        reset();
        sortMode = SortMode.BUBBLE_SORT;
    });

    quickSortButton = createButton("Quick Sort");
    quickSortButton.mousePressed(() => {
        reset();
        sortMode = SortMode.QUICK_SORT;
    });

    sortMode = SortMode.BUBBLE_SORT;

    setFrameRate(5);
}

function draw() {
    background(40);

    switch(sortMode) {
        case SortMode.BUBBLE_SORT:
            bubbleSort(nums);
            break;
        case SortMode.QUICK_SORT:
            if(sortQueue.length > 0) {
                let next = sortQueue.shift();
                quickSort(nums, next[0], next[1]);
            };
            break;
    }

    drawArray();
    highlighted.fill(0);
}

function drawArray() {
    noStroke();
    fill(50, 94, 168);

    let offset = 10;
    let w = (width - 20) / nums.length; //width of each bar
    let spacing = w;

    for(let i = 0; i < nums.length; i++) {
        if(highlighted[i] == 1) fill(255, 0, 0);
        else fill(50, 94, 168);

        rect((i * spacing) + offset, 500 - (nums[i] * barHeightScale), w, nums[i] * barHeightScale);
    }
}

function genArray(size, min, max) {
    let arr = [];
    for(let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function reset() {
    nums = genArray(lengthSlider.value(), 0, 100);
    highlighted = [];
    sortQueue = [];
    sortQueue.push([0, nums.length - 1]);
    idx = 0;
    jx = 0;
}