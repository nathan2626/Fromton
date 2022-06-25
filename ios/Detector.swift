import Foundation
import UIKit
import CoreML

@objc(Detector)
class Detector: NSObject {
  @objc(detect:resolver:rejecter:)
  func detect(_ filePath: String, resolver resolve: RCTPromiseResolveBlock, rejecter reject:RCTPromiseRejectBlock) -> Void {
    
    let url = NSURL(string: filePath)
    let data = NSData(contentsOf: url! as URL)
    let image = UIImage(data: data! as Data)
    
    /*
    guard let buffer = image?.resize(size: CGSize(width: 299, height: 299))?
            .getCVPixelBuffer() else {
        return
    }
    let model = CheeseClassifier1()
    guard let result = try? model.prediction(image: buffer) else {
      fatalError("Prediction failed!")
    }
    resolve(result.classLabel)
    */
    
    
     guard let buffer = image?.resize(size: CGSize(width: 224, height: 224))?
           .getCVPixelBuffer() else {
       return
     }
     let model = GoogLeNetPlaces()
     guard let result = try? model.prediction(sceneImage: buffer) else {
        fatalError("Prediction failed!")
     }
     resolve(result.sceneLabel)
  }
}
