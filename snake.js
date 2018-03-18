function Snake(x, y) {

    this.x = x;
    this.scale = 20
    this.y = y;
    this.xSpeed = 8;
    this.ySpeed = 9

    this.w = 20

    this.tail = []
    this.total = 0

    this.show = function () {

        fill(255)
        rect(this.x, this.y, this.w, this.w)

        if (this.tail.length > 0) {

            for (var i = 0; i < this.tail.length; i++) {

                var x = this.tail[i].x
                var y = this.tail[i].y

                rect(x, y, this.w, this.w)

            }

        }

    }

    this.update = function () {

        for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        } 
        if (this.total >= 1) {
            this.tail[this.total - 1] = createVector(this.x, this.y);
        }


        this.x += this.xSpeed * this.scale
        this.y += this.ySpeed * this.scale

        if (this.x > width) {

            this.x = 0

        } else if (this.x < 0) {

            this.x = width

        }

        if (this.y > height) {

            this.y = 0

        } else if (this.y < 0) {

            this.y = height

        }

    }

    this.hasEaten = function (food) {


        var d = dist(this.x, this.y, food.x, food.y)

        if (d < this.w) {

            this.total += 1
            return true

        }

        return false

    }

    this.direction = function (xspeed, yspeed) {

        this.xSpeed = xspeed;
        this.ySpeed = yspeed;

    }

}