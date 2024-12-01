import SwiftUI

struct ContentView: View {
    @State private var playlistLength: String = ""
    @State private var generatedMessage: String = ""

    var body: some View {
        VStack {
            TextField("Enter playlist length in minutes", text: $playlistLength)
                .keyboardType(.numberPad)
                .padding()
                .textFieldStyle(RoundedBorderTextFieldStyle())

            Button(action: {
                generatePlaylist()
            }) {
                Text("Generate")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }

            if !generatedMessage.isEmpty {
                Text(generatedMessage)
                    .padding()
            }
        }
        .padding()
    }

    private func generatePlaylist() {
        if let length = Int(playlistLength), length > 0 {
            generatedMessage = "You would like a playlist for \(length) minutes."
        } else {
            generatedMessage = "Please enter a valid number."
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
