class Point(val x: Int, val y: Int) {
  fun add(p: Point) : Point{
    return Point(this.x + p.x, this.y + p.y)
  }
}

fun main() {
  val p1 = Point(10, 20)
  val p2 = Point(30, 40)
  val p3 = p1.add(p2)
  val p4 = p2.add(p3)
  
  println("p3 = (${p3.x}, ${p3.y})")
}